import { useState } from 'react';
import {
	NavItem,
	NavItemJoin,
	StyledClose,
	StyledHamburger,
	StyledIcons,
	StyledLogo,
	StyledNavBar,
	StyledNavMobile,
	StyledOptions,
	StyledRRSS,
	StyledUl
} from './menu.styles';

const Menu = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<StyledNavBar $isVisible={toggle}>
			<StyledNavMobile>
				<StyledLogo>
					<img src='assets/images/logos/Logo-wise-gym-w.png' alt='' />
				</StyledLogo>
				<StyledIcons>
					<StyledHamburger
						$isVisible={toggle}
						onClick={() => changeToggle(setToggle)}
					>
						<img src='assets/images/icon/Hamburger.svg' alt='' />
					</StyledHamburger>
					<StyledClose
						$isVisible={toggle}
						onClick={() => changeToggle(setToggle)}
					>
						<img src='assets/images/icon/Close.svg' alt='' />
					</StyledClose>
				</StyledIcons>
			</StyledNavMobile>
			<StyledOptions $isVisible={toggle}>
				<StyledUl>
					<NavItem>
						<a href=''>STORE</a>
					</NavItem>
					<NavItem>
						<a href=''>LOGIN</a>
					</NavItem>
					<NavItemJoin>
						<a href=''>JOIN NOW</a>
					</NavItemJoin>
				</StyledUl>
				<StyledRRSS>
					<a href=''>
						<img src='public/assets/images/icon/Instagram.svg' alt='' />
					</a>
					<a href=''>
						<img src='public/assets/images/icon/Tiktok.svg' alt='' />
					</a>
					<a href=''>
						<img src='public/assets/images/icon/Youtube.svg' alt='' />
					</a>
				</StyledRRSS>
			</StyledOptions>
		</StyledNavBar>
	);
};

const changeToggle = setToggle => {
	setToggle(estado => !estado);
};

export default Menu;
