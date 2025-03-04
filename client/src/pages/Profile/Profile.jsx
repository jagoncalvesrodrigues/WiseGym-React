import { useContext, useEffect, useState } from 'react';
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import { CARD_INFO } from '../../constants/cardSub';
import {
	StyledBoxInputEdit,
	StyledInfoPofile,
	StyledInput,
	StyledMainBoxProfile,
	StyledProfile,
	StyledProfileForm,
	StyledSignOut,
	StyledSubscriptions,
	StyleImageBoxProfile,
	StyleImageProfile
} from './profile.styles';
import { AuthContext } from '../../contexts/Auth.context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import Subscription from '../../components/Subscription/Subscription';
import AddSubscription from '../../components/AddSubscription/AddSubscription';
import { getUserById } from '../../utils/api';

const Profile = () => {
	const [userData, setUserData] = useState(null);
	const [selectedSubscription, setSelectedSubscription] = useState('');
	// const [suscription, setSuscription] = useState(false);
	const { user } = useContext(AuthContext);
	console.log(user);

	useEffect(() => {
		getUserById(user, setUserData);
	}, [user]);

	console.log(userData);
	return (
		<>
			<StyledMainBoxProfile>
				<StyledInfoPofile>
					<StyledProfile>
						<StyleImageBoxProfile>
							<StyleImageProfile></StyleImageProfile>
							{user && (
								<StyledSignOut
									onClick={logout}
									src='/assets/images/icon/SignOut.svg'
									alt=''
								/>
							)}
						</StyleImageBoxProfile>
						<StyledProfileForm>
							<label htmlFor=''>Name </label>
							<StyledBoxInputEdit>
								<StyledInput type='text' defaultValue={userData?.name} />
								<img src='/assets/images/icon/Edit.svg' alt='' />
							</StyledBoxInputEdit>
							<label htmlFor=''>Email</label>
							<StyledBoxInputEdit>
								<StyledInput type='text' defaultValue={userData?.email} />
								<img src='/assets/images/icon/Edit.svg' alt='' />
							</StyledBoxInputEdit>
							{/* <label htmlFor=''>Password</label>
							<StyledBoxInputEdit>
								<StyledInput type='password' value={user.pass} />
								<img src='/assets/images/icon/Edit.svg' alt='' />
							</StyledBoxInputEdit> */}
						</StyledProfileForm>
					</StyledProfile>
					<Subscription />
					<StyledSubscriptions>
						{CARD_INFO.map(card => (
							<SubscriptionCard
								key={card.sub}
								sub={card.sub}
								position={card.position}
								price={card.price}
								img={card.img}
								color={card.color}
								onClick={() =>
									handleSubscriptionClick(card, setSelectedSubscription)
								}
							/>
						))}
					</StyledSubscriptions>
				</StyledInfoPofile>
			</StyledMainBoxProfile>
			<AddSubscription
				subscription={selectedSubscription}
				subscriptionAppears={() =>
					closeSubscriptionModal(setSelectedSubscription)
				}
			/>
		</>
	);
};

const logout = async () => {
	await signOut(auth);
};

const handleSubscriptionClick = (subscription, setSelectedSubscription) => {
	setSelectedSubscription(subscription);
};

const closeSubscriptionModal = setSelectedSubscription => {
	setSelectedSubscription('');
};

// const subscriptionAppears = setSuscription => {
// 	setSuscription(estado => !estado);
// };

// const getUserById = async (user, setUserData) => {
// 	//si user existe accede a uid
// 	if (user?.uid) {
// 		try {
// 			const response = await fetch(
// 				`http://localhost:3000/api/users/${user.uid}`
// 			);
// 			if (!response.ok) throw new Error('Error al obtener datos del usuario');
// 			const data = await response.json();
// 			setUserData(data);
// 		} catch (err) {
// 			console.error('Error al obtener datos del usuario:', err);
// 		}
// 	}
// };

export default Profile;
