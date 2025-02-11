import { useState } from 'react';
import {
	StyledBox,
	StyledLogo,
	StyledMenuOptions,
	StyledNavItem
} from './menu.styles';

const Menu = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<StyledBox>
			<StyledLogo>
				<img src='/assets/images/logos/Logo-wise-gym-w.png' alt='' />
			</StyledLogo>
			<StyledMenuOptions>
				<ul>
					<StyledNavItem>STORE</StyledNavItem>
					<StyledNavItem>LOGIN</StyledNavItem>
				</ul>
			</StyledMenuOptions>
		</StyledBox>
	);
};

export default Menu;
