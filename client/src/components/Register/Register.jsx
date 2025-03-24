import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../config/firebase.config';
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
} from './register.styles';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/form-validation';
import { COLORS } from '../../constants/colors';

const Register = ({ register, registerAppears }) => {
	const {
		register: formRegister,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	if (loading) return <h2>Loading...</h2>;
	if (user) return <Navigate to='/' replace />;

	//esta peticion se hace para que se ejecute solo una vez
	// useEffect(() => {
	// 	registerUser(setUserreg);
	// }, []);

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
				<StyledFormSection
					autoComplete='off'
					onSubmit={handleSubmit(data => registerUser(data, navigate, reset))}
					noValidate
				>
					<StyledLogo>
						<img src='/assets/images/logos/Logo_sencillo.svg' alt='' />
					</StyledLogo>
					<StyledTitle>Get Started Now!</StyledTitle>
					<StyledSubtitle>Please enter your details</StyledSubtitle>
					<StyledLabel htmlFor=''>Email</StyledLabel>
					<StyledInput
						type='email'
						{...formRegister('email', FORM_VALIDATIONS.EMAIL)}
						id='email'
					/>
					<StyledErrorText $color={COLORS.red}>
						{errors.email?.message}
					</StyledErrorText>
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
		const firebaseResponse = await createUserWithEmailAndPassword(
			auth,
			email,
			pass
		);
		console.log('user registered');
		// event.target.reset();
		const id = firebaseResponse.user.uid;

		// conectar a mongo para que envie la info
		await fetch('https://server-umber-three-60.vercel.app/api/users', {
			method: 'POST',
			body: JSON.stringify({ _id: id, email }),
			headers: { 'Content-Type': 'application/json' }
		});
		navigate('/');
	} catch (err) {
		console.error('ERROR registering user: ', err.code, err.message);
	}
};

export default Register;
