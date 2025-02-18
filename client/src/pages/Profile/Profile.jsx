import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import VerticalMenu from '../../components/VerticalMenu/VerticalMenu';
import { CARD_INFO } from '../../constants/cardSub';
import {
	StyledBoxInputEdit,
	StyledInput,
	StyledProfile,
	StyledProfileForm,
	StyledSubscriptions,
	StyleImageBoxProfile,
	StyleImageProfile
} from './profile.styles';

const Profile = () => {
	return (
		<>
			<VerticalMenu></VerticalMenu>
			<StyledProfile>
				<StyleImageBoxProfile>
					<StyleImageProfile></StyleImageProfile>
				</StyleImageBoxProfile>
				<StyledProfileForm>
					<label htmlFor=''>Name </label>
					<StyledBoxInputEdit>
						<StyledInput type='text' />
						<img src='public/assets/images/icon/Edit.svg' alt='' />
					</StyledBoxInputEdit>
					<label htmlFor=''>Email</label>
					<StyledBoxInputEdit>
						<StyledInput type='text' />
						<img src='public/assets/images/icon/Edit.svg' alt='' />
					</StyledBoxInputEdit>
					<label htmlFor=''>Password</label>
					<StyledBoxInputEdit>
						<StyledInput type='password' />
						<img src='public/assets/images/icon/Edit.svg' alt='' />
					</StyledBoxInputEdit>
				</StyledProfileForm>
			</StyledProfile>
			<StyledSubscriptions>
				{CARD_INFO.map(card => (
					<SubscriptionCard key={card.sub} $name />
				))}
				<SubscriptionCard></SubscriptionCard>
			</StyledSubscriptions>
		</>
	);
};

export default Profile;
