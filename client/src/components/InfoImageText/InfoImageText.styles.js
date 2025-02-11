import styled from "styled-components";
import { FONTS } from "../../constants/fonts";

const StyledBoxText = styled.div`
    background-color: ${({$bgcolor})=>$bgcolor};
    color: ${({$textColor})=>$textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 377px;
    padding: 25px;
    
    & h2 {
        font-size: 3rem;
    }
    & p {
        font-weight: ${FONTS.regular};
        font-size: 16px;
    }
    
    @media screen and (width>=768px){
        height: 660px;
        width: 100%;
    }
    @media screen and (width>=1024px){
        grid-column: ${({$columntext})=>$columntext};
        grid-row: ${({$rowtext})=>$rowtext};
    }
    `
const StyledImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 377px;
    @media screen and (width>=768px){
        width: 100%;
        height: 660px;
    }
`
const StyledBoxImg = styled.div`
    @media screen and (width>=1024px){
        grid-column: ${({$columnimg})=>$columnimg};
        grid-row: ${({$rowimg})=>$rowimg};
    }
`

export {StyledImg,StyledBoxText,StyledBoxImg}
