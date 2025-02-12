import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import InfoPage from '../../components/infoPage/InfoPage';
import Login from '../../components/Login/Login';
import Menu from '../../components/menu/Menu';
import { COLORS } from '../../constants/colors';
import { StyledBoxHeader, StyledJoinNow } from './home.styles';

const Home = () => {
	const [login, setLogin] = useState(false);

	console.log(login);
	return (
		<>
			<StyledBoxHeader>
				<Login loginAppears={() => loginAppears(setLogin)} login={login} />
				<Menu loginAppears={() => loginAppears(setLogin)} />
				<StyledJoinNow $bg={COLORS.white}>
					<a href=''>JOIN NOW</a>
				</StyledJoinNow>
			</StyledBoxHeader>
			<InfoPage />
			<Footer />
		</>
	);
};

const loginAppears = setLogin => {
	setLogin(estado => !estado);
};

export default Home;
