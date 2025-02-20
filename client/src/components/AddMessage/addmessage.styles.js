import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(84, 58, 20, 0.7);
    backdrop-filter: blur(5px);
    position: fixed;
    
 
    @media (max-width: 425px) {
        padding: 0;
    }
    @media screen and (width >=768px){
        padding: 38px;
    }
    `;

const StyledLoginBox = styled.div`
    background-color: white;
    width: 100vw;
    align-self: flex-end;
    height: 525px;
    
    @media screen and (width >=425px){
        align-self: center;
    }
    @media screen and (width >=768px){
        width: 758px;
        padding: 17px 31px;
        display: flex;
        gap: 29px;
    }
    @media screen and (width >=768px){
        width: 867px;
        height: 587px;
    }

`;

const StyledImageSection = styled.div`
    display: none;
    background-image: url('/assets/images/imgs/pexels-edwardeyer-10610182.jpg');
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (width >= 768px){
        display: block;
    }
    `;

const StyledFormSection = styled.form`
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

const StyledButton = styled.input`
    color:${COLORS.white};
    font-size: 1rem;
    padding: 15px;
    background-color: ${COLORS.black};
`;

export {StyledLabelSignUp,StyledLabelForgot,StyledLabel,StyledButton,StyledFormSection,StyledImageSection,StyledInput,StyledLoginBox,StyledLoginContainer,StyledLogo,StyledSubtitle,StyledTitle}