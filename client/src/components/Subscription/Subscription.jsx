import { CARD_INFO } from '../../constants/cardSub';
import {
	StyledBold,
	StyledBoxInfoSub,
	StyledBoxInfoSubscription,
	StyledBoxSuscription,
	StyledButtonChange,
	StyledDescription,
	StyledImageSubscription,
	StyledTitleSubscription
} from './suscription.styles';

const Subscription = ({ userData, setShowPopUp }) => {
	const selectedSubscription = getSubscriptionInfo(userData.suscription.length);
	console.log(selectedSubscription);
	return (
		<>
			<StyledBoxSuscription>
				<StyledImageSubscription
					$img={selectedSubscription.img}
				></StyledImageSubscription>
				<StyledBoxInfoSubscription>
					<StyledTitleSubscription>YOUR SUBSCRIPTION</StyledTitleSubscription>
					<StyledBoxInfoSub>
						<StyledBold>{selectedSubscription.sub}</StyledBold>
						<StyledDescription>
							{selectedSubscription.info.map(info => (
								<p key={info}>{info}</p>
							))}
						</StyledDescription>
					</StyledBoxInfoSub>
					<StyledBoxInfoSub>
						<StyledBold>{selectedSubscription.price}</StyledBold>
						<StyledButtonChange onClick={setShowPopUp}>
							CHANGE IT
						</StyledButtonChange>
					</StyledBoxInfoSub>
				</StyledBoxInfoSubscription>
			</StyledBoxSuscription>
		</>
	);
};

const getSubscriptionInfo = length => {
	switch (length) {
		case 1:
			return CARD_INFO.find(sub => sub.sub === 'BASIC');
		case 2:
			return CARD_INFO.find(sub => sub.sub === 'PREMIUM');
		case 4:
			return CARD_INFO.find(sub => sub.sub === 'PRO');
		default:
			return null; // Si no coincide con ninguno
	}
};
export default Subscription;
