import { useContext } from 'react';
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import { CARD_INFO } from '../../constants/cardSub';
import {
	StyledBoxInputEdit,
	StyledInfoPofile,
	StyledInput,
	StyledMainBoxProfile,
	StyledProfile,
	StyledProfileForm,
	StyledSignOut,
	StyledSubscriptions,
	StyleImageBoxProfile,
	StyleImageProfile
} from './profile.styles';
import { AuthContext } from '../../contexts/Auth.context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import Subscription from '../../components/Subscription/Subscription';

const Profile = () => {
	const { user } = useContext(AuthContext);
	return (
		<StyledMainBoxProfile>
			<StyledInfoPofile>
				<StyledProfile>
					<StyleImageBoxProfile>
						<StyleImageProfile></StyleImageProfile>
						{user && (
							<StyledSignOut
								onClick={logout}
								src='/assets/images/icon/SignOut.svg'
								alt=''
							/>
						)}
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
				<Subscription />
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
const logout = async () => {
	await signOut(auth);
};
export default Profile;
