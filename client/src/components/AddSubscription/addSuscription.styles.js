import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledSubscriptionContainer = styled.div`
    display: ${({$suscription})=> $suscription ? 'flex':'none'};
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    position: fixed;
    z-index: 100000000;

    top: 0;

    @media (max-width: 425px) {
        padding: 0;

    }
    @media screen and (width >=768px){
        padding: 38px;
    }
`;

const StyledSuscriptionBox = styled.div`
    background-color: white;
    width: 100vw;
    align-self: flex-end;
    justify-self: end;
    height: 625px;
    @media screen and (width >=425px){
        align-self: center;
    }
    @media screen and (width >=768px){
        padding: 17px 31px;
        display: flex;
        gap: 29px;
    }
    @media screen and (width >=1024px){
        width: 867px;
        height: 657px;
    }

`;

const StyledImageSection = styled.div`
    display: none;
    background-image: url('/assets/images/imgs/plan-professional.jpg');
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (width >= 768px){
        display: block;
    }
    `;

const StyledFormSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 25px 10px;
    @media screen and (width >= 768px){
        width: 100%;
    }
    
`;

const StyledLogo = styled.div`
    width: 75px;
    height: 73px;
    align-self: center;
    margin-bottom: 24px;
`;

const StyledTitle = styled.h2`
    align-self: center;
    margin: 0;
    `;

const StyledSubtitle = styled.p`
    margin: 0;
    align-self: center;
    margin-bottom: 24px;
`;
const StyledLabel = styled.label`
    font-size: 0.813rem;

`;
const StyledLabelSignUp = styled.label`
    font-size: 0.813rem;
    align-self: center;
    padding: 16px;
`;
const StyledLabelForgot = styled.a`
    font-size: 0.813rem;
    align-self: flex-end;
`;

const StyledInput = styled.input`
    outline: none;
    font-size: 1rem;
    border-style: none;
    border-bottom: 1px solid ${COLORS.black};
    padding: 10px;
`;

const StyledButton = styled.button`
    color:${COLORS.white};
    font-size: 1rem;
    padding: 15px;
    background-color: ${COLORS.black};
    margin-top: 50px;
`;
const StyledBoxCardNumbers = styled.div`
    display: flex;

    justify-content: space-between;
    gap: 10px;
`;
const StyledHalfBox = styled.div`
    width: 45%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
const StyledSelectionSports = styled.div`
    display: flex;
    margin-inline: auto;
    gap: 30px;
    padding: 30px;
`;
const StyledCheckBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;



export {StyledCheckBox,StyledSelectionSports,StyledHalfBox,StyledBoxCardNumbers,StyledSuscriptionBox,StyledSubscriptionContainer,StyledLabelSignUp,StyledLabelForgot,StyledLabel,StyledButton,StyledFormSection,StyledImageSection,StyledInput,StyledLogo,StyledSubtitle,StyledTitle}