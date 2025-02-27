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
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Register = ({ register, registerAppears }) => {
	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	if (loading) return <h2>Loading...</h2>;
	if (user) return <Navigate to='/' replace />;
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
				<StyledFormSection onSubmit={event => registerUser(event, navigate)}>
					<StyledLogo>
						<img src='public/assets/images/logos/Logo_sencillo.svg' alt='' />
					</StyledLogo>
					<StyledTitle>Get Started Now!</StyledTitle>
					<StyledSubtitle>Please enter your details</StyledSubtitle>
					<StyledLabel htmlFor=''>Email</StyledLabel>
					<StyledInput type='email' name='email' id='email' />
					<StyledLabel htmlFor=''>Password</StyledLabel>
					<StyledInput type='password' name='pass' id='pass' />
					<StyledButton type='submit' value='Sign Up' />
					<StyledLabelSignUp htmlFor=''>
						Do you have an account?<a href=''>Login</a>
					</StyledLabelSignUp>
				</StyledFormSection>
			</StyledLoginBox>
		</StyledLoginContainer>
	);
};

const registerUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const pass = event.target.pass.value;
	try {
		await createUserWithEmailAndPassword(auth, email, pass);
		console.log('user registered');
		event.target.reset();

		//conectar a mongo para que envie la info
		await fetch('http://localhost:3000/api/users', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: { 'Content-Type': 'application/json' }
		});
		navigate('/');
	} catch (err) {
		console.error('ERROR registering user: ', err.code, err.message);
	}
};

export default Register;
