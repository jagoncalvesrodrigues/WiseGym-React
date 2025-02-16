import { useContext, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import InfoPage from '../../components/infoPage/InfoPage';
import Login from '../../components/Login/Login';
import Menu from '../../components/menu/Menu';
import { COLORS } from '../../constants/colors';
import { StyledBoxHeader, StyledJoinNow } from './home.styles';
import Register from '../../components/Register/Register';
import { AuthContext } from '../../contexts/Auth.context';

const Home = () => {
	const { user, loading } = useContext(AuthContext);
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);

	console.log(user);
	console.log(login);
	return (
		<>
			<StyledBoxHeader>
				{!user && !loading && (
					<>
						<StyledJoinNow
							onClick={() => registerAppears(setRegister)}
							$bg={COLORS.white}
						>
							<p>JOIN NOW</p>
						</StyledJoinNow>
					</>
				)}
				<Register
					registerAppears={() => registerAppears(setRegister)}
					register={register}
				/>
				<Login loginAppears={() => loginAppears(setLogin)} login={login} />
				<Menu
					user={user}
					loading={loading}
					loginAppears={() => loginAppears(setLogin)}
					registerAppears={() => registerAppears(setRegister)}
				/>
			</StyledBoxHeader>
			<InfoPage />
			<Footer />
		</>
	);
};

const loginAppears = setLogin => {
	setLogin(estado => !estado);
};

const registerAppears = setRegister => {
	setRegister(estado => !estado);
};

export default Home;
