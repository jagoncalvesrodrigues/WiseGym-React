import { StyledBoxOption, StyledOPtionTitle } from './bookingOptions.styles';

const BookingOptions = ({ name, img, onClick }) => {
	return (
		<StyledBoxOption $img={img} onClick={onClick}>
			<StyledOPtionTitle>{name}</StyledOPtionTitle>
		</StyledBoxOption>
	);
};

export default BookingOptions;
