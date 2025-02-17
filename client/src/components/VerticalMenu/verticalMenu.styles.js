import styled from "styled-components";

const StyledBoxMenuVertical = styled.div`
    width: 313px;
    height: 100vh;
    background-image: url('public/assets/images/imgs/sidemenu.jpg');
    background-position: center;
    background-size: cover;
    box-shadow: 10px 0px 5px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: fixed;
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

export {StyledMenuVOption,StyledBoxMenuVertical,StyledBoxProfile,StyledPhoto}