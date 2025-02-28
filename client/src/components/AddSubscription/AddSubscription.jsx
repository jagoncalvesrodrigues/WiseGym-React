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

const AddSubscription = ({ subscription, subscriptionAppears }) => {
	console.log(subscription);
	const maxSelected =
		subscription.sub === 'Basic' ? 1 : subscription.sub === 'Premium' ? 2 : 4;

	const [selectedSports, setSelectedSports] = useState({
		Boxing: false,
		BJJ: false,
		MuayThai: false,
		K1: false
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
					<StyledTitle>{subscription.sub} SUSCRIPTION</StyledTitle>
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
								name='K1'
								id='K1'
								checked={selectedSports.K1}
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
								name='K1'
								id='K1'
								checked={selectedSports.K1}
								onChange={handleCheckboxChange}
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
					<StyledButton type='submit' value='CONFIRM' />
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

	// Count how many are currently selected
	const selectedCount = Object.values(selectedSports).filter(Boolean).length;

	// If selecting a new checkbox, check if it exceeds the limit
	if (checked && selectedCount >= maxSelected) {
		return; // Prevent selection if it exceeds the limit
	}

	// Update the state of the selected checkboxes
	setSelectedSports(prevState => ({
		...prevState,
		[name]: checked
	}));
};

export default AddSubscription;
