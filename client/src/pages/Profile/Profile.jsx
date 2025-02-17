import VerticalMenu from '../../components/VerticalMenu/VerticalMenu';
import { StyledProfile, StyledProfileForm } from './profile.styles';

const Profile = () => {
	return (
		<>
			<VerticalMenu></VerticalMenu>
			<StyledProfile>
				<StyledProfileForm></StyledProfileForm>
			</StyledProfile>
		</>
	);
};

export default Profile;
