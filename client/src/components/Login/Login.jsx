import { signInWithEmailAndPassword } from 'firebase/auth';
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
} from './login.styles';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const Login = ({ login, loginAppears }) => {
	const navigate = useNavigate();

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
				<StyledFormSection onSubmit={event => loginUser(event, navigate)}>
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

const loginUser = async (event, navigate) => {
	event.preventDefault();
	//guardamos la info del campo en una variable
	const email = event.target.email.value;
	const pass = event.target.password.value;
	try {
		await signInWithEmailAndPassword(auth, email, pass);
		console.log('User Logged');
		event.target.reset();
		navigate('/');
	} catch (err) {
		console.error('Error login user:', err.code, err.message);
	}
};

export default Login;
