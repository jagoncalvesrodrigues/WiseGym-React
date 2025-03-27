import { useContext, useEffect, useState } from 'react';
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import { CARD_INFO } from '../../constants/cardSub';
import {
	StyledBoxButtonsConfirm,
	StyledBoxChangeSubscriptionPopUp,
	StyledBoxConfirmation,
	StyledBoxInputEdit,
	StyledButtonChangeSubscription,
	StyledCheck,
	StyledImgLogoBoxConfirm,
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
import { signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import Subscription from '../../components/Subscription/Subscription';
import AddSubscription from '../../components/AddSubscription/AddSubscription';
import { getUserById } from '../../utils/api';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [userData, setUserData] = useState(null);
	const [selectedSubscription, setSelectedSubscription] = useState(null);
	// const [suscription, setSuscription] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const { user } = useContext(AuthContext);
	// console.log(user, 'suscription:' + selectedSubscription);
	const navigate = useNavigate();
	const [name, setName] = useState(''); // Estado para el nombre

	useEffect(() => {
		if (user) {
			setName(user.displayName || ''); // Inicializa el nombre con el de Firebase
		}
	}, [user]);

	useEffect(() => {
		getUserById(user, setUserData);
	}, [user]);

	useEffect(() => {
		if (showPopUp) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		// Limpieza al desmontar
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [showPopUp]);
	return (
		<>
			{showPopUp && (
				<StyledBoxChangeSubscriptionPopUp>
					<StyledBoxConfirmation>
						<StyledImgLogoBoxConfirm
							src='/assets/images/logos/Logo-wise-gym.png'
							alt=''
						/>
						<p>Are you sure you want to change your subscription?</p>
						<StyledBoxButtonsConfirm>
							<StyledButtonChangeSubscription
								$color={COLORS.yellow}
								onClick={() => setShowPopUp(!showPopUp)}
							>
								CLOSE
							</StyledButtonChangeSubscription>
							<StyledButtonChangeSubscription
								$color={COLORS.brown}
								onClick={event =>
									updateSuscription(event, userData._id, setUserData, navigate)
								}
							>
								CHANGE IT
							</StyledButtonChangeSubscription>
						</StyledBoxButtonsConfirm>
					</StyledBoxConfirmation>
				</StyledBoxChangeSubscriptionPopUp>
			)}
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
								<StyledInput
									readOnly={!isEditing}
									type='text'
									defaultValue={userData?.name}
									onChange={e => setName(e.target.value)}
								/>
								{!isEditing ? (
									<img
										src='/assets/images/icon/Edit.svg'
										onClick={() => setIsEditing(!isEditing)}
									/>
								) : (
									<>
										<StyledCheck
											src='/assets/images/icon/check.svg'
											alt='Edit'
											onClick={e =>
												updateName(e, userData._id, name, setUserData, navigate)
											}
										/>
										<img
											src='/assets/images/icon/Close.svg'
											alt='Edit'
											onClick={() => setIsEditing(!isEditing)}
										/>
									</>
								)}
							</StyledBoxInputEdit>
							<label htmlFor=''>Email</label>
							<StyledBoxInputEdit>
								<StyledInput
									readOnly={true}
									type='text'
									defaultValue={userData?.email}
								/>
							</StyledBoxInputEdit>
							{/* <label htmlFor=''>Password</label>
							<StyledBoxInputEdit>
								<StyledInput type='password' value={user.pass} />
								<img src='/assets/images/icon/Edit.svg' alt='' />
							</StyledBoxInputEdit> */}
						</StyledProfileForm>
					</StyledProfile>
					{userData?.suscription?.length > 0 && (
						<Subscription
							userData={userData}
							setShowPopUp={() => setShowPopUp(!showPopUp)}
						/>
					)}
					{userData?.suscription?.length === 0 && (
						<StyledSubscriptions>
							{CARD_INFO.map(card => (
								<SubscriptionCard
									key={card.sub}
									sub={card.sub}
									position={card.position}
									price={card.price}
									img={card.img}
									color={card.color}
									onClick={() => setSelectedSubscription(card)}
								/>
							))}
						</StyledSubscriptions>
					)}
				</StyledInfoPofile>
			</StyledMainBoxProfile>
			<AddSubscription
				subscription={selectedSubscription}
				subscriptionAppears={() => setSelectedSubscription('')}
				userData={userData}
				setUserData={setUserData}
			/>
		</>
	);
};

const logout = async () => {
	await signOut(auth);
};

const updateSuscription = async (event, id, setUserData, navigate) => {
	event.preventDefault();

	//conectar a mongo para que envie la info
	const response = await fetch(
		`https://server-umber-three-60.vercel.app/api/users/${id}`,
		{
			method: 'PATCH',
			body: JSON.stringify({ suscription: [] }),
			headers: { 'Content-Type': 'application/json' }
		}
	);
	const updatedUser = await response.json();
	setUserData(updatedUser);
	navigate('/');
};

const updateName = async (event, id, newName, setUserData, navigate) => {
	event.preventDefault();
	try {
		// 🔹 1. Actualizar el nombre en Firebase Authentication
		if (auth.currentUser) {
			await updateProfile(auth.currentUser, { displayName: newName });
		}

		// 🔹 2. Actualizar el nombre en MongoDB
		const response = await fetch(
			`https://server-umber-three-60.vercel.app/api/users/${id}`,
			{
				method: 'PATCH',
				body: JSON.stringify({ name: newName }), // Aquí pones el nombre real, no un array vacío []
				headers: { 'Content-Type': 'application/json' }
			}
		);

		const updatedUser = await response.json();
		setUserData(updatedUser); // Actualizar el estado local con los nuevos datos
		navigate('/'); // Redirigir después de la actualización
	} catch (error) {
		console.error('Error actualizando el nombre:', error);
	}
};

export default Profile;
