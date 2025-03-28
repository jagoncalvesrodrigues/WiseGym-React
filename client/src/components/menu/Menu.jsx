import { useContext, useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';

const Menu = ({ loginAppears, registerAppears }) => {
	const [toggle, setToggle] = useState(false);

	const { user, loading } = useContext(AuthContext);

	useEffect(() => {
		console.log('User actualizado:', user);
	}, [user]);

	useEffect(() => {
		if (toggle) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		// Cleanup para restaurar el scroll cuando el componente se desmonte
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [toggle]);

	return (
		<StyledNavBar $isVisible={toggle}>
			<StyledNavMobile>
				<StyledLogo>
					<Link to='/'>
						<img src='assets/images/logos/Logo-wise-gym-w.png' alt='' />
					</Link>
				</StyledLogo>
				<StyledIcons>
					<StyledHamburger
						$isVisible={toggle}
						onClick={() => setToggle(!toggle)}
					>
						<img src='assets/images/icon/Hamburger.svg' alt='' />
					</StyledHamburger>
					<StyledClose $isVisible={toggle} onClick={() => setToggle(!toggle)}>
						<img src='assets/images/icon/Close.svg' alt='' />
					</StyledClose>
				</StyledIcons>
			</StyledNavMobile>
			<StyledOptions $isVisible={toggle}>
				<StyledUl>
					<NavItem>
						<Link to='/store'>STORE</Link>
					</NavItem>
					{!user && !loading && (
						<>
							<NavItem onClick={loginAppears}>
								<p>LOGIN</p>
							</NavItem>
							<NavItemJoin onClick={registerAppears}>
								<p>JOIN NOW</p>
							</NavItemJoin>
						</>
					)}
					{user && (
						<>
							<NavItem>
								<Link to='/booking'>BOOK</Link>
							</NavItem>
							<NavItem>
								<Link to='/messages'>MESSAGES</Link>
							</NavItem>
							<NavItem>
								<Link to='/profile'>PROFILE</Link>
							</NavItem>
						</>
					)}
				</StyledUl>
				<StyledRRSS>
					<a href='https://www.instagram.com/ufc/'>
						<img src='assets/images/icon/Instagram.svg' alt='' />
					</a>
					<a href='https://www.tiktok.com/@ufc?lang=es'>
						<img src='assets/images/icon/Tiktok.svg' alt='' />
					</a>
					<a href='https://www.youtube.com/@ufc'>
						<img src='assets/images/icon/Youtube.svg' alt='' />
					</a>
				</StyledRRSS>
			</StyledOptions>
		</StyledNavBar>
	);
};
export default Menu;
