import { StyledBoxOption, StyledOPtionTitle } from './bookingOptions.styles';

const BookingOptions = ({ name, img }) => {
	return (
		<StyledBoxOption $img={img}>
			<StyledOPtionTitle>{name}</StyledOPtionTitle>
		</StyledBoxOption>
	);
};

export default BookingOptions;
