import { MARTIALARTS } from '../../constants/martialArts';
import {
	StyledBoxReservationCard,
	StyledDate,
	StyledTitleCard
} from './reservationCard.styles';

const ReservationCard = ({ ma, hour, date }) => {
	return (
		<StyledBoxReservationCard $photo={findBg(ma)}>
			<StyledTitleCard>{ma}</StyledTitleCard>
			<StyledDate>
				<p>{hour}</p>
				<p>{date}</p>
			</StyledDate>
		</StyledBoxReservationCard>
	);
};

const findBg = ma => {
	const art = MARTIALARTS.find(art => art.text === ma);
	return art.img;
};

export default ReservationCard;
