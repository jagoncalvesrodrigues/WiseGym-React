import { useContext, useEffect, useState } from 'react';
import { MENUVERTICAL } from '../../constants/MenuVerticalInfo';
import {
	StyledBoxMenuVertical,
	StyledBoxProfile,
	StyledMenuVOption,
	StyledNavMobileProfile,
	StyledPhoto
} from './verticalMenu.styles';
import {
	StyledClose,
	StyledHamburger,
	StyledIcons,
	StyledLogo
} from '../menu/menu.styles';
import { Link } from 'react-router-dom';
import { getUserById } from '../../utils/api';
import { AuthContext } from '../../contexts/Auth.context';

const VerticalMenu = () => {
	const [toggle, setToggle] = useState(false);
	const [userData, setUserData] = useState(null);
	// const [suscription, setSuscription] = useState(false);
	const { user } = useContext(AuthContext);
	console.log(user);

	useEffect(() => {
		getUserById(user, setUserData);
	}, [user]);
	return (
		<>
			<StyledNavMobileProfile>
				<StyledLogo>
					<Link to='/'>
						<img src='/assets/images/logos/Logo-wise-gym.png' alt='' />
					</Link>
				</StyledLogo>
				<StyledIcons>
					<StyledHamburger
						$isVisible={toggle}
						onClick={() => showMenu(setToggle)}
					>
						<img src='/assets/images/icon/Hamburger-B.svg' alt='' />
					</StyledHamburger>
					<StyledClose $isVisible={toggle} onClick={() => showMenu(setToggle)}>
						<img src='/assets/images/icon/Close-B.svg' alt='' />
					</StyledClose>
				</StyledIcons>
			</StyledNavMobileProfile>
			<StyledBoxMenuVertical $toggle={toggle}>
				<StyledBoxProfile>
					<StyledPhoto></StyledPhoto>
					<Link to='/profile'>{userData?.name}</Link>
				</StyledBoxProfile>
				{MENUVERTICAL.map(option => (
					<StyledMenuVOption key={option.name}>
						<Link to={option.route}>
							<img src={option.icon} alt='' />
						</Link>
						<Link to={option.route}>
							<p>{option.name}</p>
						</Link>
					</StyledMenuVOption>
				))}
			</StyledBoxMenuVertical>
		</>
	);
};

const showMenu = setToggle => {
	setToggle(state => !state);
};

export default VerticalMenu;
