import {
	StyledBoxFooter,
	StyledBoxLogo,
	StyledButtosFooterMenu,
	StyledInfoButtons,
	StyledOptionsFooterMenu,
	StyledRRSS
} from './footer.styles';

const Footer = () => {
	return (
		<StyledBoxFooter>
			<StyledBoxLogo>
				<img src='assets/images/logos/Logo-wise-gym-w.png' alt='' />
			</StyledBoxLogo>
			<StyledOptionsFooterMenu>
				<StyledButtosFooterMenu>
					<a href=''>LOGIN</a>
				</StyledButtosFooterMenu>
				<StyledButtosFooterMenu>
					<a href=''>HELP</a>
				</StyledButtosFooterMenu>
				<StyledButtosFooterMenu>
					<a href=''>CONTACT</a>
				</StyledButtosFooterMenu>
			</StyledOptionsFooterMenu>
			<StyledRRSS>
				<a href='https://www.instagram.com/ufc/'>
					<img src='public/assets/images/icon/Instagram.svg' alt='' />
				</a>
				<a href='https://www.tiktok.com/@ufc?lang=es'>
					<img src='public/assets/images/icon/Tiktok.svg' alt='' />
				</a>
				<a href='https://www.youtube.com/@ufc'>
					<img src='public/assets/images/icon/Youtube.svg' alt='' />
				</a>
			</StyledRRSS>
			<StyledInfoButtons></StyledInfoButtons>
		</StyledBoxFooter>
	);
};

export default Footer;
