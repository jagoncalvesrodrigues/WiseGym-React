import { StyledLogo, StyledNav } from './menu.styles';

const Menu = () => {
	return (
		<StyledNav>
			<StyledLogo>
				<img src='/assets/images/logos/Logo-wise-gym-w.png' alt='' />
			</StyledLogo>
			<ul>
				<li>STORE</li>
				<li>LOGIN</li>
			</ul>
		</StyledNav>
	);
};

export default Menu;
