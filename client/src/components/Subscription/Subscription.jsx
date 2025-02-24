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

const Subscription = () => {
	return (
		<StyledBoxSuscription>
			<StyledImageSubscription></StyledImageSubscription>
			<StyledBoxInfoSubscription>
				<StyledTitleSubscription>YOUR SUBSCRIPTION</StyledTitleSubscription>
				<StyledBoxInfoSub>
					<StyledBold>PRO</StyledBold>
					<StyledDescription>
						<p>Subscription to all martial art</p>
						<p>Unlimited classes</p>
						<p>Unlimited use of Fitness Center</p>
						<p>Space reservation</p>
					</StyledDescription>
				</StyledBoxInfoSub>
				<StyledBoxInfoSub>
					<StyledBold>400$</StyledBold>
					<StyledButtonChange>
						<p>CHANGE IT</p>
					</StyledButtonChange>
				</StyledBoxInfoSub>
			</StyledBoxInfoSubscription>
		</StyledBoxSuscription>
	);
};

export default Subscription;
