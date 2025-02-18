import styled from "styled-components";
import { FONTS } from "../../constants/fonts";

const StyledCard = styled.div`
    width: 100%;
    height: 473px;
    display: flex;
    background: ${({ $color }) => $color};
    position:relative;
    margin-bottom: 10px;

    @media screen and (width >= 768px){
        flex-direction: column;
    }
    @media screen and (width >= 1024px){
        flex-direction: row;
    }
`;
const StyledCardImage = styled.div`
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({ $img }) => `url(${$img})`};

    @media screen and (width >= 768px){
        width: 100%;
        height: 50%;
        background-position:0px ${({ $position }) => $position};
    }
    @media screen and (width >= 1024px){
        width: 50%;
        height: 100%;
        background-position: center;    
    }
`;
const StyledTextCard = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (width >= 768px){
        width: 100%;
        height: 50%;
        padding-left: 50px;
    }
    @media screen and (width >= 1024px){
        width: 50%;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
const StyledTitle = styled.p`
    color: white;
    font-size: 32px;
    font-weight: ${FONTS.bold};
    margin: auto;
    @media screen and (width >= 768px){
        margin: 0;
    }
`;
const StyledText = styled.p`
    color: white;
    font-size: 14px;
    margin: 5px;
    font-weight: ${FONTS.regular};
`;
const StyledPrice = styled.p`
    color: white;
    margin: auto;
    font-size: 32px;
    font-weight: ${FONTS.bold};

    @media screen and (width >= 768px){
        position: absolute;
        right: 50px;
    }
    @media screen and (width >= 1024px){
        margin-inline: auto;    
        height: 40px;
        bottom: 10px;
        right: 20px;
    }
`

export {StyledPrice,StyledText,StyledTitle,StyledCard,StyledCardImage,StyledTextCard}