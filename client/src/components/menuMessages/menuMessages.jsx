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
} from './menuMessages.styles';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';

const MenuMessages = ({ loginAppears, registerAppears }) => {
	const [toggle, setToggle] = useState(false);

	const { user, loading } = useContext(AuthContext);

	useEffect(() => {
		console.log('User actualizado:', user);
	}, [user]);

	return (
		<StyledNavBar $isVisible={toggle}>
			<StyledNavMobile>
				<StyledLogo>
					<Link to='/'>
						<img src='/assets/images/logos/Logo-wise-gym.png' alt='' />
					</Link>
				</StyledLogo>
				<StyledIcons>
					<StyledHamburger
						$isVisible={toggle}
						onClick={() => setToggle(!toggle)}
					>
						<img src='assets/images/icon/Hamburger-B.svg' alt='' />
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
export default MenuMessages;
