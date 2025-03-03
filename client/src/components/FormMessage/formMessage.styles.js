import styled from "styled-components";
import { FONTS } from "../../constants/fonts";

const StyledMessageContainer = styled.div`
    display: ${({$activeMessage})=>$activeMessage?'flex':'none'};
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(84, 58, 20, 0.7);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    
    @media (max-width: 425px) {
        padding: 0;
    }
    @media screen and (width >=768px){
        padding: 38px;
    }
    `;

const StyledMessageBox = styled.div`
    background-color: white;
    width: 100vw;
    align-self: flex-end;
    height: 750px;
    padding: 10px;
    
    @media screen and (width >=425px){
        align-self: center;
    }
    @media screen and (width >=768px){
        width: 758px;
        padding: 17px 31px;
    }
    @media screen and (width >=768px){
        width: 867px;
        height: 587px;
    }

`;

const StyledFormMessage = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
`;
const StyledTitleAdd = styled.p`
    font-size: 1.25rem;
    font-weight: ${FONTS.bold};
`;
const StyledTitleMessage = styled.input`
    border-style: none;
    border-bottom: 1px solid black;
    outline: none;
`;
const StyledTextArea = styled.textarea`
    outline: none;
    height: 400px;
    @media screen and (width >=768px){
        height: 250px;
    }
`;
const StyledLabel = styled.label`
    padding:10px;
`;
const StyledBoxButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
`;
const StyledCancelButton = styled.input`
    background-color: rgba(0,0,0,0.25);
    border-style: none;
    padding: 15px;
    width: 102px;
`;
const StyledAcceptButton = styled.input`
    background-color: rgba(240,187,120,0.6);
    border-style: none;
    padding: 15px;
    width: 102px;

`;

export {StyledLabel,StyledTitleAdd,StyledCancelButton,StyledAcceptButton,StyledBoxButtons,StyledTextArea,StyledTitleMessage,StyledFormMessage,StyledMessageBox,StyledMessageContainer}