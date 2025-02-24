import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import BookingOptions from '../../components/BookingOptions/BookingOptions';
import {
	StyledBoxCalendar,
	StyledBoxDay,
	StyledBoxDays,
	StyledBoxReserve,
	StyledMainBoxBooking,
	StyledMonthYear,
	StyledTitleMonth
} from './booking.styles';
import { useState } from 'react';

const Booking = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedMA, setSelectedMA] = useState(null);
	return (
		<StyledMainBoxBooking>
			{MARTIALARTS.map(ma => (
				<BookingOptions key={ma.text} name={ma.text} img={ma.img} />
			))}
			<StyledBoxReserve>
				<div>
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
				</div>
				<div>
					<StyledMonthYear>
						<p>{dayName}</p>
					</StyledMonthYear>
				</div>
			</StyledBoxReserve>
		</StyledMainBoxBooking>
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

export default Booking;
