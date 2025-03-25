import { StyledBoxFooter, StyledBoxLogo, StyledRRSS } from './footer.styles';

const Footer = () => {
	return (
		<StyledBoxFooter>
			<StyledBoxLogo>
				<img src='/assets/images/logos/Logo-wise-gym-w.png' alt='' />
			</StyledBoxLogo>
			<StyledRRSS>
				<a href='https://www.instagram.com/ufc/'>
					<img src='/assets/images/icon/Instagram.svg' alt='' />
				</a>
				<a href='https://www.tiktok.com/@ufc?lang=es'>
					<img src='/assets/images/icon/Tiktok.svg' alt='' />
				</a>
				<a href='https://www.youtube.com/@ufc'>
					<img src='/assets/images/icon/Youtube.svg' alt='' />
				</a>
			</StyledRRSS>
		</StyledBoxFooter>
	);
};

export default Footer;
