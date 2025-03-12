import ReservationCard from '../../components/ReservationCard/ReservationCard';
import { StyledMainReservation } from './reservation.styles';

const Reservation = () => {
	return (
		<StyledMainReservation>
			<ReservationCard />
			<ReservationCard />
			<ReservationCard />
			<ReservationCard />
			<ReservationCard />
			<ReservationCard />
		</StyledMainReservation>
	);
};

export default Reservation;
