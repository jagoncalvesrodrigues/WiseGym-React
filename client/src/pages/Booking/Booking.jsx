import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import BookingOptions from '../../components/BookingOptions/BookingOptions';
import {
	StyledBoxCalendar,
	StyledBoxDay,
	StyledBoxDays,
	StyledBoxDesktopCalendar,
	StyledBoxDesktopHours,
	StyledBoxHours,
	StyledBoxOptions,
	StyledBoxReserve,
	StyledButtonReserve,
	StyledCloseReserve,
	StyledHour,
	StyledMainBoxBooking,
	StyledMonthYear,
	StyledTitleMonth
} from './booking.styles';
import { useState } from 'react';
import { MARTIALARTS } from '../../constants/martialArts';
import AddSubscription from '../../components/AddSubscription/AddSubscription';

const Booking = () => {
	// const [selectedDate, setSelectedDate] = useState(null);
	const [selectedMA, setSelectedMA] = useState(0);
	const [showCalendarBox, setshowCalendarBox] = useState(false);
	console.log(showCalendarBox);
	return (
		<>
			<AddSubscription />
			<StyledMainBoxBooking>
				<StyledBoxOptions $showCalendarBox={showCalendarBox}>
					{MARTIALARTS.map((ma, index) => (
						<BookingOptions
							key={index}
							name={ma.text}
							img={ma.img}
							onClick={() => {
								setSelectedMA(index);
								showCalendar(setshowCalendarBox);
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
								<StyledBoxDay key={index}>{format(day, 'd')}</StyledBoxDay>
							))}
						</StyledBoxCalendar>
					</StyledBoxDesktopCalendar>
					<StyledBoxDesktopHours>
						<StyledCloseReserve
							onClick={() => showCalendar(setshowCalendarBox)}
							src='/assets/images/icon/Close-B.svg'
							alt=''
						/>
						<StyledMonthYear>
							<p>{dayName}</p>
						</StyledMonthYear>
						<StyledBoxHours>
							{MARTIALARTS[selectedMA].hours.map(ma => (
								<StyledHour key={ma}>{ma}</StyledHour>
							))}
						</StyledBoxHours>
						<StyledButtonReserve>RESERVE</StyledButtonReserve>
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

const showCalendar = setshowCalendarBox => {
	setshowCalendarBox(element => !element);
};

export default Booking;
