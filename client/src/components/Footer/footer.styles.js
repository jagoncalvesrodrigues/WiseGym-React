import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledBoxFooter = styled.div`
    background-color: ${COLORS.black};
    width: 100vw;
    height: 300px;
    display: flex;
    flex-direction: column;

    @media screen and (width>=768px){
        flex-direction: row;
        height: 200px;
    }
`;

const StyledRRSS = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50%;
    @media screen and (width>=768px){
        height: 100%;
        width: 50%;
    }
`;
const StyledBoxLogo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    height: 50%;
    justify-content: center;
    & img{
        width: 244px;
    }
    @media screen and (width>=768px){
        height: 100%;
        width: 50%;
    }
`;

export {StyledBoxLogo,StyledBoxFooter,StyledRRSS}