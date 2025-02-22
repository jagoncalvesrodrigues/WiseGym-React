import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledBoxFooter = styled.div`
    background-color: ${COLORS.black};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (width>=768px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 150px auto;
    }
    `;
const StyledOptionsFooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (width>=768px){
        grid-column: 2/4;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: white;
    }
`;
const StyledRRSS = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 250px;
`;
const StyledBoxLogo = styled.div`
    display: flex;
    /* padding: 52px 45px; */
    align-items: center;
    height: 100%;
    justify-content: center;
    & img{
        width: 244px;
    }
`;
const StyledInfoButtons = styled.div`
    grid-column: 2/4;
    grid-row: 2;
`;
const StyledButtosFooterMenu = styled.div`
    color:${COLORS.white} ;
    display: flex;
    height: 170px;
    justify-content: space-around;
    align-items: center;
`;
export {StyledInfoButtons,StyledButtosFooterMenu,StyledBoxLogo,StyledBoxFooter,StyledOptionsFooterMenu,StyledRRSS}