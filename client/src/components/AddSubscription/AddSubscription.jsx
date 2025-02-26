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
					<StyledTitle>PRO SUSCRIPTION</StyledTitle>
					<StyledSelectionSports>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>Boxing</StyledLabel>
							<input type='checkbox' name='Boxing' id='Boxing' />
						</StyledCheckBox>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>BJJ</StyledLabel>
							<input type='checkbox' name='BJJ' id='BJJ' />
						</StyledCheckBox>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>MuayThai</StyledLabel>
							<input type='checkbox' name='MuayThai' id='MuayThai' />
						</StyledCheckBox>
						<StyledCheckBox>
							<StyledLabel htmlFor=''>K1</StyledLabel>
							<input type='checkbox' name='K1' id='K1' />
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

export default AddSubscription;
