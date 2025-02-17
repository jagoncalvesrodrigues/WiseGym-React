import { MENUVERTICAL } from '../../constants/MenuVerticalInfo';
import {
	StyledBoxMenuVertical,
	StyledBoxProfile,
	StyledMenuVOption,
	StyledPhoto
} from './verticalMenu.styles';

const VerticalMenu = () => {
	return (
		<StyledBoxMenuVertical>
			<StyledBoxProfile>
				<StyledPhoto></StyledPhoto>
				<p>Juan Goncalves</p>
			</StyledBoxProfile>
			{MENUVERTICAL.map(option => (
				<StyledMenuVOption key={option.name}>
					<img src={option.icon} alt='' />
					<p>{option.name}</p>
				</StyledMenuVOption>
			))}
		</StyledBoxMenuVertical>
	);
};

export default VerticalMenu;
