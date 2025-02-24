import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import BookingOptions from '../../components/BookingOptions/BookingOptions';
import {
	StyledBoxCalendar,
	StyledBoxDay,
	StyledBoxReserve,
	StyledMainBoxBooking
} from './booking.styles';
import { useState } from 'react';

const Booking = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	return (
		<StyledMainBoxBooking>
			<BookingOptions></BookingOptions>
			<StyledBoxReserve>
				<p>{monthName}</p>
				<p>{year}</p>

				<StyledBoxCalendar>
					{filteredDays.map((day, index) => (
						<StyledBoxDay key={index}>{format(day, 'd')}</StyledBoxDay>
					))}
				</StyledBoxCalendar>
			</StyledBoxReserve>
		</StyledMainBoxBooking>
	);
};

const today = new Date(); // Obtiene la fecha actual
const year = today.getFullYear(); // Año actual
const month = today.getMonth() + 1; // Mes actual (Enero = 0, por eso sumamos 1)
const monthName = format(today, 'MMMM').toUpperCase(); //Obtengo el mes escrito

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
