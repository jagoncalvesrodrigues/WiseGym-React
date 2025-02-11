import { StyledBoxImg, StyledBoxText, StyledImg } from './InfoImageText.styles';

const InfoImageText = ({
	img,
	title,
	text,
	color,
	textColor,
	columnimg,
	rowimg,
	columntext,
	rowtext
}) => {
	return (
		<>
			<StyledBoxImg $columnimg={columnimg} $rowimg={rowimg}>
				<StyledImg src={img} alt='' />
			</StyledBoxImg>
			<StyledBoxText
				$columntext={columntext}
				$rowtext={rowtext}
				$bgcolor={color}
				$textColor={textColor}
			>
				<h2>{title}</h2>
				<p>{text}</p>
			</StyledBoxText>
		</>
	);
};

export default InfoImageText;
