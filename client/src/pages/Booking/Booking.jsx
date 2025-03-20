import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import BookingOptions from '../../components/BookingOptions/BookingOptions';
import {
	StyledBackScheduleButton,
	StyledBoxButtonsBookingConfirm,
	StyledBoxCalendar,
	StyledBoxConfirmationSchedule,
	StyledBoxDay,
	StyledBoxDays,
	StyledBoxDesktopCalendar,
	StyledBoxDesktopHours,
	StyledBoxHours,
	StyledBoxOptions,
	StyledBoxReserve,
	StyledButtonReserve,
	StyledCloseReserve,
	StyledConfirmReservePopUp,
	StyledHour,
	StyledInputInfo,
	StyledMainBoxBooking,
	StyledMonthYear,
	StyledTitleMonth
} from './booking.styles';
import { useContext, useEffect, useState } from 'react';
import { MARTIALARTS } from '../../constants/martialArts';
import { getUserById } from '../../utils/api';
import { AuthContext } from '../../contexts/Auth.context';
import { COLORS } from '../../constants/colors';

const Booking = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedMA, setSelectedMA] = useState(0);
	const [showCalendarBox, setshowCalendarBox] = useState(false);
	const [userData, setUserData] = useState(null);
	const [selectedHour, setSelectedHour] = useState(null);
	const [confirmReserve, setConfirmReserve] = useState(false);
	const { user } = useContext(AuthContext);

	// Filtrar las artes marciales que coincidan con la suscripción del usuario
	const filteredOptions = MARTIALARTS.filter(art =>
		userData?.suscription?.some(
			sub => sub.toLowerCase() === art.text.toLowerCase()
		)
	);

	console.log(selectedDate);

	useEffect(() => {
		getUserById(user, setUserData);
	}, [user]);
	return (
		<>
			{confirmReserve && (
				<StyledConfirmReservePopUp>
					<StyledBoxConfirmationSchedule>
						<p>Confirm your details</p>
						<label htmlFor=''>Name</label>
						<StyledInputInfo readOnly type='text' value={userData.name} />
						<label htmlFor=''>Class</label>
						<StyledInputInfo
							type='text'
							value={`${selectedDate ? selectedDate : ''} ${selectedHour ? selectedHour : ''}`}
							readOnly
						/>
						<StyledBoxButtonsBookingConfirm>
							<StyledBackScheduleButton
								$bg={COLORS.white}
								$lettersC={COLORS.black}
								onClick={() => setConfirmReserve(!confirmReserve)}
							>
								BACK
							</StyledBackScheduleButton>
							<StyledBackScheduleButton
								$bg={COLORS.brown}
								$lettersC={COLORS.white}
								onClick={event => {
									setConfirmReserve(!confirmReserve),
										addReservation(
											event,
											userData._id,
											selectedDate,
											selectedMA,
											selectedHour
										);
								}}
							>
								SCHEDULE
							</StyledBackScheduleButton>
						</StyledBoxButtonsBookingConfirm>
					</StyledBoxConfirmationSchedule>
				</StyledConfirmReservePopUp>
			)}
			<StyledMainBoxBooking>
				<StyledBoxOptions $showCalendarBox={showCalendarBox}>
					{filteredOptions.map((ma, index) => (
						<BookingOptions
							key={index}
							name={ma.text}
							img={ma.img}
							onClick={() => {
								setSelectedMA(index);
								setshowCalendarBox(!showCalendarBox);
							}}
						/>
					))}
				</StyledBoxOptions>
				<StyledBoxReserve $showCalendarBox={showCalendarBox}>
					<StyledBoxDesktopCalendar>
						<StyledMonthYear>
							<StyledTitleMonth>{monthName}</StyledTitleMonth>
							<p>{year}</p>
						</StyledMonthYear>
						<StyledBoxDays></StyledBoxDays>
						<StyledBoxCalendar>
							{filteredDays.map((day, index) => (
								<StyledBoxDay
									key={index}
									onClick={() => setSelectedDate(format(day, 'yyyy-MM-dd'))}
								>
									{format(day, 'd')}
								</StyledBoxDay>
							))}
						</StyledBoxCalendar>
					</StyledBoxDesktopCalendar>
					<StyledBoxDesktopHours>
						{selectedDate && (
							<>
								<StyledCloseReserve
									onClick={() => {
										setshowCalendarBox(!showCalendarBox), setSelectedDate(null);
									}}
									src='/assets/images/icon/Close-B.svg'
									alt=''
								/>
								<StyledMonthYear>
									<p>{dayName}</p>
								</StyledMonthYear>
								<StyledBoxHours>
									{MARTIALARTS[selectedMA].hours.map(ma => (
										<StyledHour key={ma} onClick={() => setSelectedHour(ma)}>
											{ma}
										</StyledHour>
									))}
								</StyledBoxHours>
							</>
						)}
						<StyledButtonReserve
							onClick={() => setConfirmReserve(!confirmReserve)}
						>
							RESERVE
						</StyledButtonReserve>
					</StyledBoxDesktopHours>
				</StyledBoxReserve>
			</StyledMainBoxBooking>
		</>
	);
};

const today = new Date(); // Obtiene la fecha actual
const year = today.getFullYear(); // Año actual
const month = today.getMonth() + 1; // Mes actual (Enero = 0, por eso sumamos 1)
const monthName = format(today, 'MMMM').toUpperCase(); //Obtengo el mes escrito
const dayName = format(today, 'EEEE').toUpperCase(); //Obtengo el mes escrito

// Obtiene todos los días del mes
const firstDay = startOfMonth(new Date(year, month - 1));
const lastDay = endOfMonth(new Date(year, month - 1));
const daysInMonth = eachDayOfInterval({ start: firstDay, end: lastDay });

// Filtra los días para excluir sábados (6) y domingos (0)
const filteredDays = daysInMonth.filter(day => {
	const dayOfWeek = day.getDay();
	return dayOfWeek !== 0 && dayOfWeek !== 6;
});

const addReservation = async (
	event,
	id,
	selectedDate,
	selectedMA,
	selectedHour
) => {
	event.preventDefault();
	const reservationData = {
		date: selectedDate,
		martialArt: MARTIALARTS[selectedMA].text,
		hour: selectedHour
	};

	//conectar a mongo para que envie la info
	await fetch(
		`https://server-k79qevkf5-juans-projects-e9623df8.vercel.app/api/users/addReservation/${id}`,
		{
			method: 'PATCH',
			body: JSON.stringify(reservationData),
			headers: { 'Content-Type': 'application/json' }
		}
	);
};

export default Booking;
