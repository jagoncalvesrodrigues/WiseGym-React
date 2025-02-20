import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import { CARD_INFO } from '../../constants/cardSub';
import {
	StyledBoxInputEdit,
	StyledInfoPofile,
	StyledInput,
	StyledMainBoxProfile,
	StyledProfile,
	StyledProfileForm,
	StyledSubscriptions,
	StyleImageBoxProfile,
	StyleImageProfile
} from './profile.styles';

const Profile = () => {
	return (
		<StyledMainBoxProfile>
			<StyledInfoPofile>
				<StyledProfile>
					<StyleImageBoxProfile>
						<StyleImageProfile></StyleImageProfile>
					</StyleImageBoxProfile>
					<StyledProfileForm>
						<label htmlFor=''>Name </label>
						<StyledBoxInputEdit>
							<StyledInput type='text' />
							<img src='/assets/images/icon/Edit.svg' alt='' />
						</StyledBoxInputEdit>
						<label htmlFor=''>Email</label>
						<StyledBoxInputEdit>
							<StyledInput type='text' />
							<img src='/assets/images/icon/Edit.svg' alt='' />
						</StyledBoxInputEdit>
						<label htmlFor=''>Password</label>
						<StyledBoxInputEdit>
							<StyledInput type='password' />
							<img src='/assets/images/icon/Edit.svg' alt='' />
						</StyledBoxInputEdit>
					</StyledProfileForm>
				</StyledProfile>
				<StyledSubscriptions>
					{CARD_INFO.map(card => (
						<SubscriptionCard
							key={card.sub}
							sub={card.sub}
							position={card.position}
							price={card.price}
							img={card.img}
							color={card.color}
						/>
					))}
				</StyledSubscriptions>
			</StyledInfoPofile>
		</StyledMainBoxProfile>
	);
};

export default Profile;
