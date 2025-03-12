import { useState } from 'react';
import {
	StyledBoxCardNumbers,
	StyledButton,
	StyledCheckBox,
	StyledFormSection,
	StyledHalfBox,
	StyledImageSection,
	StyledInput,
	StyledLabel,
	StyledLogo,
	StyledSelectionSports,
	StyledSubscriptionContainer,
	StyledSuscriptionBox,
	StyledTitle
} from './addSuscription.styles';
import { useNavigate } from 'react-router-dom';

const AddSubscription = ({
	subscription,
	subscriptionAppears,
	userData,
	setUserData
}) => {
	console.log(userData);
	const maxSelected =
		subscription?.sub === 'BASIC' ? 1 : subscription?.sub === 'PREMIUM' ? 2 : 4;
	const navigate = useNavigate();

	const [selectedSports, setSelectedSports] = useState({
		Boxing: false,
		BJJ: false,
		MuayThai: false,
		KickBoxing: false
	});
	return (
		<StyledSubscriptionContainer
			onClick={e => {
				//Se hace esto para seleccionar justamente el div de afuera y no se
				//cierre al hacer click en un hijo
				if (e.target === e.currentTarget) {
					subscriptionAppears();
				}
			}}
			$suscription={subscription}
		>
			<StyledSuscriptionBox>
				<StyledImageSection />
				<StyledFormSection>
					<StyledLogo>
						<img src='assets/images/logos/Logo_sencillo.svg' alt='' />
					</StyledLogo>
					<StyledTitle>{subscription?.sub} SUSCRIPTION</StyledTitle>
					<StyledSelectionSports>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>Boxing</StyledLabel>
							<input
								type='checkbox'
								name='Boxing'
								id='Boxing'
								checked={selectedSports.Boxing}
								onChange={e =>
									handleCheckboxChange(
										e,
										selectedSports,
										setSelectedSports,
										maxSelected
									)
								}
							/>
						</StyledCheckBox>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>BJJ</StyledLabel>
							<input
								type='checkbox'
								name='BJJ'
								id='BJJ'
								checked={selectedSports.BJJ}
								onChange={e =>
									handleCheckboxChange(
										e,
										selectedSports,
										setSelectedSports,
										maxSelected
									)
								}
							/>
						</StyledCheckBox>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>MuayThai</StyledLabel>
							<input
								type='checkbox'
								name='MuayThai'
								id='MuayThai'
								checked={selectedSports.MuayThai}
								onChange={e =>
									handleCheckboxChange(
										e,
										selectedSports,
										setSelectedSports,
										maxSelected
									)
								}
							/>
						</StyledCheckBox>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>K1</StyledLabel>
							<input
								type='checkbox'
								name='KickBoxing'
								id='KickBoxing'
								checked={selectedSports.KickBoxing}
								onChange={e =>
									handleCheckboxChange(
										e,
										selectedSports,
										setSelectedSports,
										maxSelected
									)
								}
							/>
						</StyledCheckBox>
					</StyledSelectionSports>
					<StyledLabel htmlFor=''>Name</StyledLabel>
					<StyledInput type='text' name='email' id='email' />
					<StyledLabel htmlFor=''>Card Number</StyledLabel>
					<StyledInput type='number' name='password' id='password' />
					<StyledBoxCardNumbers>
						<StyledHalfBox>
							<StyledLabel htmlFor=''>Expiration</StyledLabel>
							<StyledInput type='number' name='email' id='email' />
						</StyledHalfBox>
						<StyledHalfBox>
							<StyledLabel htmlFor=''>CVC</StyledLabel>
							<StyledInput type='number' name='password' id='password' />
						</StyledHalfBox>
					</StyledBoxCardNumbers>
					<StyledButton
						onClick={async event => {
							await updateSuscription(
								event,
								userData._id,
								selectedSports,
								setUserData,
								navigate
							);
							subscriptionAppears();
						}}
					>
						CONFIRM
					</StyledButton>
				</StyledFormSection>
			</StyledSuscriptionBox>
		</StyledSubscriptionContainer>
	);
};

const handleCheckboxChange = (
	event,
	selectedSports,
	setSelectedSports,
	maxSelected
) => {
	const { name, checked } = event.target;

	// Cuenta cuantos hay seleccionados
	const selectedCount = Object.values(selectedSports).filter(Boolean).length;

	// Mira si se excedio el limite
	if (checked && selectedCount >= maxSelected) {
		return;
	}
	// actualizamos el estado
	setSelectedSports(prevState => ({
		...prevState,
		[name]: checked
	}));
};

const updateSuscription = async (
	event,
	id,
	selectedSports,
	setUserData,
	navigate
) => {
	try {
		event.preventDefault();
		const sportsSelected = Object.keys(selectedSports).filter(
			sport => selectedSports[sport]
		);
		const response = await fetch(`http://localhost:3000/api/users/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({ suscription: sportsSelected }),
			headers: { 'Content-Type': 'application/json' }
		});
		if (!response.ok) {
			throw new Error('Failed to update subscription');
		}
		const updatedUser = await response.json();
		setUserData(updatedUser);
		navigate('/booking');
	} catch (error) {
		console.error('Error updating subscription:', error);
	}
};

export default AddSubscription;
