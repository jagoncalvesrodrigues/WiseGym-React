import Footer from '../../components/Footer/Footer';
import InfoPage from '../../components/infoPage/InfoPage';
import Menu from '../../components/menu/Menu';
import { COLORS } from '../../constants/colors';
import { StyledBoxHeader, StyledJoinNow } from './home.styles';

const Home = () => {
	return (
		<>
			<StyledBoxHeader>
				<Menu />
				<StyledJoinNow $bg={COLORS.white}>
					<a href=''>JOIN NOW</a>
				</StyledJoinNow>
			</StyledBoxHeader>
			<InfoPage />
			<Footer />
		</>
	);
};

export default Home;
