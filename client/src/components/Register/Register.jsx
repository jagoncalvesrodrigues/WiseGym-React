import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../config/firebase.config';
import {
	StyledButton,
	StyledFormSection,
	StyledImageSection,
	StyledInput,
	StyledLabel,
	StyledLabelSignUp,
	StyledLoginBox,
	StyledLoginContainer,
	StyledLogo,
	StyledSubtitle,
	StyledTitle
} from './register.styles';

const Register = ({ register, registerAppears }) => {
	return (
		<StyledLoginContainer
			onClick={e => {
				//Se hace esto para seleccionar justamente el div de afuera y no se
				//cierre al hacer click en un hijo
				if (e.target === e.currentTarget) {
					registerAppears();
				}
			}}
			$login={register}
		>
			<StyledLoginBox>
				<StyledImageSection />
				<StyledFormSection onSubmit={registerUser}>
					<StyledLogo>
						<img src='public/assets/images/logos/Logo_sencillo.svg' alt='' />
					</StyledLogo>
					<StyledTitle>Get Started Now!</StyledTitle>
					<StyledSubtitle>Please enter your details</StyledSubtitle>
					<StyledLabel htmlFor=''>Email</StyledLabel>
					<StyledInput type='email' name='email' id='email' />
					<StyledLabel htmlFor=''>Password</StyledLabel>
					<StyledInput type='password' name='password' id='password' />
					<StyledButton type='submit' value='Sign Up' />
					<StyledLabelSignUp htmlFor=''>
						Do you have an account?<a href=''>Login</a>
					</StyledLabelSignUp>
				</StyledFormSection>
			</StyledLoginBox>
		</StyledLoginContainer>
	);
};

const registerUser = async event => {
	event.preventDefault();
	//guardamos la info del campo en una variable
	const email = event.target.email.value;
	const pass = event.target.password.value;
	try {
		await createUserWithEmailAndPassword(auth, email, pass);
		console.log('User Logged');
		event.target.reset();
	} catch (err) {
		console.error('Error login user:', err.code, err.message);
	}
};

export default Register;
