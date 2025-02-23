import styled from "styled-components";

const StyledBoxMenuVertical = styled.div`
    width: 313px;
    height: 100vh;
    background-image: url('/assets/images/imgs/sidemenu.jpg');
    background-position: center;
    background-size: cover;
    box-shadow: -5px 0px 5px rgba(0, 0, 0, .2);
    display: ${({$toggle}) => $toggle ? 'flex':'none'};
    flex-direction: column;
    padding: 10px;
    position: absolute;
    right: 0;
    z-index: 567;
    position: fixed;
    @media screen and (width >=768px){
        display: flex;
        left: 0;
        z-index: 10;
        position: fixed;
        box-shadow: 10px 0px 5px rgba(0, 0, 0, .2);
        width: 35%;
    }
    @media screen and (width >=1024px){
        width: 20%;
    }
`;
const StyledBoxProfile = styled.div`
   height: 88px;
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: center;
   gap: 20px;
   color: white;
`;
const StyledPhoto = styled.div`
   width: 48px;
   height: 48px;
   border-radius: 50%;
   background-color: bisque;
`;
const StyledMenuVOption = styled.div`
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    padding: 25px;
    padding-left: 50px;
`;
const StyledNavMobileProfile = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 22px; 
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
    
    @media screen and (width >=768px){
        display: none;
    }
`;


export {StyledNavMobileProfile,StyledMenuVOption,StyledBoxMenuVertical,StyledBoxProfile,StyledPhoto}