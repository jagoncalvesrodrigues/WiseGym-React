import {
	StyledButton,
	StyledFormSection,
	StyledImageSection,
	StyledInput,
	StyledLabel,
	StyledLabelForgot,
	StyledLabelSignUp,
	StyledLoginBox,
	StyledLoginContainer,
	StyledLogo,
	StyledSubtitle,
	StyledTitle
} from './addmessage.styles';

const AddMessage = () => {
	return (
		<StyledLoginContainer
		// onClick={e => {
		// 	Se hace esto para seleccionar justamente el div de afuera y no se
		// 	cierre al hacer click en un hijo
		// 	if (e.target === e.currentTarget) {
		// 		loginAppears();
		// 	}
		// }}
		// $login={login}
		>
			<StyledLoginBox>
				<StyledImageSection />
				<StyledFormSection>
					<StyledLogo>
						<img src='assets/images/logos/Logo_sencillo.svg' alt='' />
					</StyledLogo>
					<StyledTitle>Welcome Back!</StyledTitle>
					<StyledSubtitle>Please enter your details</StyledSubtitle>
					<StyledLabel htmlFor=''>Email</StyledLabel>
					<StyledInput type='email' name='email' id='email' />
					<StyledLabel htmlFor=''>Password</StyledLabel>
					<StyledInput type='password' name='password' id='password' />
					<StyledLabelForgot htmlFor=''>Forgot Password</StyledLabelForgot>
					<StyledButton type='submit' value='Login' />
					<StyledLabelSignUp htmlFor=''>
						Don’t have an account?<a href=''>Login</a>
					</StyledLabelSignUp>
				</StyledFormSection>
			</StyledLoginBox>
		</StyledLoginContainer>
	);
};

export default AddMessage;
