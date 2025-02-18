import styled from "styled-components";
import { FONTS } from "../../constants/fonts";

const StyledCard = styled.div`
    width: 100%;
    height: 473px;
    display: flex;
    background: black;
    position:relative;
`;
const StyledCardImage = styled.div`
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url('public/assets/images/imgs/plan-professional.jpg');
`;
const StyledTextCard = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const StyledTitle = styled.p`
    color: white;
    font-size: 32px;
    font-weight: ${FONTS.bold};
`;
const StyledText = styled.p`
    color: white;
    font-size: 14px;
    font-weight: ${FONTS.regular};
`;
const StyledPrice = styled.p`
    color: white;
    position: absolute;
    bottom: 0;
    margin-left: 60%;
    font-size: 32px;
    font-weight: ${FONTS.bold};
`

export {StyledPrice,StyledText,StyledTitle,StyledCard,StyledCardImage,StyledTextCard}