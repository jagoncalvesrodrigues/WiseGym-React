import { useState } from 'react';
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

const VerticalMenu = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<StyledNavMobileProfile>
				<StyledLogo>
					<img src='assets/images/logos/Logo-wise-gym.png' alt='' />
				</StyledLogo>
				<StyledIcons>
					<StyledHamburger
						$isVisible={toggle}
						onClick={() => showMenu(setToggle)}
					>
						<img src='assets/images/icon/Hamburger-B.svg' alt='' />
					</StyledHamburger>
					<StyledClose $isVisible={toggle} onClick={() => showMenu(setToggle)}>
						<img src='assets/images/icon/Close-B.svg' alt='' />
					</StyledClose>
				</StyledIcons>
			</StyledNavMobileProfile>
			<StyledBoxMenuVertical $toggle={toggle}>
				<StyledBoxProfile>
					<StyledPhoto></StyledPhoto>
					<p>Juan Goncalves</p>
				</StyledBoxProfile>
				{MENUVERTICAL.map(option => (
					<StyledMenuVOption key={option.name}>
						<Link>
							<img src={option.icon} alt='' />
						</Link>
						<Link to='/'>
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
