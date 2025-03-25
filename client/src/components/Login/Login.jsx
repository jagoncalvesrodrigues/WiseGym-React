import { signInWithEmailAndPassword } from 'firebase/auth';
import {
	StyledButton,
	StyledErrorText,
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
} from './login.styles';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ login, loginAppears }) => {
	const navigate = useNavigate();
	const [firebaseError, setFirebaseError] = useState('');

	return (
		<StyledLoginContainer
			onClick={e => {
				//Se hace esto para seleccionar justamente el div de afuera y no se
				//cierre al hacer click en un hijo
				if (e.target === e.currentTarget) {
					loginAppears();
				}
			}}
			$login={login}
		>
			<StyledLoginBox>
				<StyledImageSection />
				<StyledFormSection
					autoComplete='off'
					onSubmit={event => {
						loginUser(event, navigate, loginAppears, setFirebaseError);
					}}
					noValidate
				>
					<StyledLogo>
						<img src='assets/images/logos/Logo_sencillo.svg' alt='' />
					</StyledLogo>
					<StyledTitle>Welcome Back!</StyledTitle>
					<StyledSubtitle>Please enter your details</StyledSubtitle>
					<StyledLabel htmlFor=''>Email</StyledLabel>
					<StyledInput type='email' name='email' id='email' />
					<StyledLabel htmlFor=''>Password</StyledLabel>
					<StyledInput type='password' name='password' id='password' />
					<StyledButton type='submit' value='Login' />
					{firebaseError && <StyledErrorText>{firebaseError}</StyledErrorText>}
					<StyledLabelSignUp htmlFor=''>
						Don’t have an account?<a href=''>Register</a>
					</StyledLabelSignUp>
				</StyledFormSection>
			</StyledLoginBox>
		</StyledLoginContainer>
	);
};

const loginUser = async (event, navigate, loginAppears, setFirebaseError) => {
	event.preventDefault();
	//guardamos la info del campo en una variable
	const email = event.target.email.value;
	const pass = event.target.password.value;
	try {
		await signInWithEmailAndPassword(auth, email, pass);
		console.log('User Logged');
		event.target.reset();
		loginAppears();
		navigate('/');
	} catch (err) {
		console.error('Error login user:', err.code, err.message);
		// Manejo mejorado de errores de Firebase
		if (err.code === 'auth/user-not-found') {
			setFirebaseError('User not found. Please check your email.');
		} else if (err.code === 'auth/wrong-password') {
			setFirebaseError('Incorrect password. Try again.');
		} else if (err.code === 'auth/invalid-credential') {
			setFirebaseError('Invalid email or password. Please try again.');
		} else if (err.code === 'auth/too-many-requests') {
			setFirebaseError('Too many failed attempts. Try again later.');
		} else {
			setFirebaseError('An unexpected error occurred. Try again.');
		}
	}
};

export default Login;
