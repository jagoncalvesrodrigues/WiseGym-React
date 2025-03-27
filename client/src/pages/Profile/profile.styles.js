import styled from "styled-components";
import { COLORS } from "../../constants/colors";

//PROFILE
const StyledMainBoxProfile = styled.div`
    @media screen and (width >= 768px){
        display: flex;
    }
`;
const StyledInfoPofile = styled.div`
    @media screen and (width >= 768px){
        width: 65%;
        height: 100%;
        padding: 10px;
        margin-left: auto;
    }
    @media screen and (width >= 1024px){
        width: 80%;
    }
`;
const StyledProfile = styled.div`
    width: 100%;
    padding: 10px;
    height: 497px;
    background-image: url('/assets/images/imgs/fondo-profile.jpg');
    padding-bottom: 41px;
    margin-bottom: 10px;
    @media screen and (width >= 768px){
        padding: 10px;
    }
    @media screen and (width >= 1024px){
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    `;
const StyleImageBoxProfile = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    
    @media screen and (width >= 768px){
        justify-content: left;
        margin-bottom: 30px;
    }

`;
const StyledBoxInputEdit = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid white;
`;
const StyleImageProfile = styled.div`
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background-image: url('/assets/images/profilePhotos/bjj.png');
    background-size:cover;
`;
const StyledProfileForm = styled.div`
    color: white;
    gap: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const StyledInput = styled.input`
    border-style: none;
    background-color: transparent;
    outline: none;
    color: white;
    padding: 10px;
    width: 100%;
`;
const StyledSignOut = styled.img`

  @media screen and (width >= 768px){
    
      position: absolute;
      right: 50px;
    }
`;
const StyledCheck = styled.img`
    width: 40px;
    margin-right: 20px;
`;
//SUBSCRIPTIONS

const StyledSubscriptions = styled.div`
    width: 100%;

    @media screen and (width >= 1024px) {
        display: flex;
        gap: 10px;
    }
`;
const StyledBoxChangeSubscriptionPopUp = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.brown50};
    z-index: 120;
    position: fixed;
    display: flex;
    align-items: end;
    top: 0;
    justify-content: center;
    @media screen and (width >= 768px){
        align-items: center;
    }
`;
const StyledBoxConfirmation = styled.div`
    width: 100vw;
    height: 600px;
    background-color: ${COLORS.egg};
    display: flex;
    flex-direction: column;
    padding: 50px;
    align-items: center;
    text-align: center;
    gap: 80px;
    @media screen and (width >= 768px){
        gap: 20px;
        width: 600px;
        height: 300px;
    }
    `;
const StyledBoxButtonsConfirm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    @media screen and (width >= 768px){
        flex-direction: row;
        justify-content: space-between;

    }
    `;
const StyledImgLogoBoxConfirm = styled.img`
    width: 230px;
    `;
const StyledButtonChangeSubscription = styled.button`
    background-color: ${({$color})=>$color};
    border-style: none;
    height: 50px;
    color: white;
    @media screen and (width >= 768px){  
        width: 200px;
    }
`;
export {StyledCheck,StyledButtonChangeSubscription,StyledBoxButtonsConfirm,StyledImgLogoBoxConfirm,StyledBoxConfirmation,StyledBoxChangeSubscriptionPopUp,StyledSignOut,StyledInfoPofile,StyledMainBoxProfile,StyledSubscriptions,StyledBoxInputEdit,StyledInput,StyleImageBoxProfile,StyleImageProfile,StyledProfile,StyledProfileForm}