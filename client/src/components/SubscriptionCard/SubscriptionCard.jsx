import {
	StyledCard,
	StyledCardImage,
	StyledPrice,
	StyledText,
	StyledTextCard,
	StyledTitle
} from './SubscriptionCard.styles';

const SubscriptionCard = () => {
	return (
		<StyledCard>
			<StyledCardImage />
			<StyledTextCard>
				<StyledTitle></StyledTitle>
				<StyledText></StyledText>
			</StyledTextCard>
			<StyledPrice></StyledPrice>
		</StyledCard>
	);
};

export default SubscriptionCard;
