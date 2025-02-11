import { INFO } from '../../constants/infopage';
import InfoImageText from '../InfoImageText/InfoImageText';
import { StyledMainDiv } from './infoPage.styles';

const InfoPage = () => {
	return (
		<StyledMainDiv>
			{INFO.map(info => (
				<InfoImageText
					{...info}
					key={info.title}
					img={info.img}
					title={info.title}
					text={info.text}
					color={info.color}
					textColor={info.textColor}
					columnimg={info.columnimg}
					rowimg={info.rowimg}
					columntext={info.columntext}
					rowtext={info.rowtext}
				/>
			))}
		</StyledMainDiv>
	);
};

export default InfoPage;
