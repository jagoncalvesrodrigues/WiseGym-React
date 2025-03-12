import {
	StyledBoxReservationCard,
	StyledDate,
	StyledTitleCard
} from './reservationCard.styles';

const ReservationCard = () => {
	return (
		<StyledBoxReservationCard>
			<StyledTitleCard>BOXING</StyledTitleCard>
			<StyledDate>
				<p>04/04/2025</p>
				<p>16:00</p>
			</StyledDate>
		</StyledBoxReservationCard>
	);
};

export default ReservationCard;
