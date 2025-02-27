import { Link } from 'react-router-dom';
import {
	StyledBoxLogo,
	StyledBoxStore,
	StyledButtonComeBack
} from './store.styles';

const Store = () => {
	return (
		<StyledBoxStore>
			<StyledBoxLogo />
			<p>WE ARE WORKING ON THE SHOP, SORRY FOR THE INCONVENIENCE</p>
			<Link to='/'>
				<StyledButtonComeBack>COME BACK</StyledButtonComeBack>
			</Link>
		</StyledBoxStore>
	);
};

export default Store;
