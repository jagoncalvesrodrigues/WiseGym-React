import styled from "styled-components"
import { COLORS } from "../../constants/colors";

const StyledNavBar = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: ${({ $isVisible }) => $isVisible ? COLORS.brown : "transparent"};;

    @media screen and (width >=768px){
        flex-direction: row;
        height: 117px;
        background-color:transparent ;
        justify-content: space-around;
        padding: 22px;
        
    }
`;
const StyledNavMobile = styled.div`
    display: flex;
    height: 117px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 22px; 
    
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
    @media screen and (width >=768px){
        box-shadow: none;
        padding: 0;
        width: auto;
        height: auto;
    }
`;
const StyledLogo = styled.div`
    width: 157px;

    @media screen and (width >=1024px){
        width: 200px;
    }
`;
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    align-items: center;
    color: ${COLORS.white};
    gap: 40px;

    @media screen and (width >=768px){
        flex-direction: row;
        background-color: transparent;
        justify-content: space-around;
        gap: 100px;
        height: 100%;
    }
`;
const NavItem = styled.li`
    height: 110px;
    display: flex;
    align-items: center;
    @media screen and (width >=768px){
        height: auto;
        justify-content: center;
    }
`;
const NavItemJoin = styled.li`
    height: 110px;
    display: flex;
    align-items: center;
    
    @media screen and (width >=768px){
        display: none;
        height: 100%;
    }
`;
const StyledIcons = styled.div`
    @media screen and (width >=768px){
        display: none;
    }
`;
const StyledHamburger = styled.div`
    display: ${({$isVisible})=>($isVisible ? "none":"flex")};
`;

const StyledClose = styled.div`
    display: ${({$isVisible})=>($isVisible ? "flex":"none")};
`;
    
const StyledOptions = styled.div`
    display: ${({$isVisible})=>($isVisible ? "flex":"none")};
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    gap: 90px;


    @media screen and (width >=768px){
        height: 100%;
        display: flex;
    }

`;
const StyledRRSS = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (width >=768px){
        display: none;
    }
`;



export {StyledOptions,StyledUl,StyledClose,StyledHamburger,NavItemJoin,StyledRRSS,StyledNavMobile,StyledIcons,StyledNavBar,StyledLogo,NavItem}