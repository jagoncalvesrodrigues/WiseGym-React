import { useContext, useEffect, useState } from 'react';
import ReservationCard from '../../components/ReservationCard/ReservationCard';
import { StyledMainReservation } from './reservation.styles';
import { getUserById } from '../../utils/api';
import { AuthContext } from '../../contexts/Auth.context';

const Reservation = () => {
	const [userData, setUserData] = useState(null);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		getUserById(user, setUserData);
	}, [user]);
	return (
		<StyledMainReservation>
			{userData?.reserves?.map(info => (
				<ReservationCard
					key={info.hour}
					ma={info.martialArt}
					hour={info.date}
					date={info.hour}
				/>
			))}
		</StyledMainReservation>
	);
};

export default Reservation;
