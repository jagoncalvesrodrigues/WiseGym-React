import { Link } from 'react-router-dom';
import { StyledBoxOption, StyledOPtionTitle } from './bookingOptions.styles';

const BookingOptions = () => {
	return (
		<StyledBoxOption>
			<Link to='/reservation'>
				<StyledOPtionTitle>BOXING</StyledOPtionTitle>
			</Link>
		</StyledBoxOption>
	);
};

export default BookingOptions;
