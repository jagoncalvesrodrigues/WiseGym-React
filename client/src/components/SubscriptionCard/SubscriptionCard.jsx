import { CARD_INFO } from '../../constants/cardSub';
import {
	StyledCard,
	StyledCardImage,
	StyledPrice,
	StyledText,
	StyledTextCard,
	StyledTitle
} from './SubscriptionCard.styles';

const SubscriptionCard = ({ sub, position, price, img, color }) => {
	return (
		<StyledCard $color={color}>
			<StyledCardImage $position={position} $img={img} />
			<StyledTextCard>
				<StyledTitle>{sub}</StyledTitle>
				{CARD_INFO[0].info.map((line, index) => (
					<StyledText key={index}>{line}</StyledText>
				))}
				<StyledPrice>{price}</StyledPrice>
			</StyledTextCard>
		</StyledCard>
	);
};

export default SubscriptionCard;
