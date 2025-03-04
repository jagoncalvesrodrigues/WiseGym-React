import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const StyledBoxMessages = styled.div`
    width:100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const StyledBoxDate = styled.div`
    display: flex;
    background-color: ${COLORS.egg};
    height: 52px;
    padding: 10px 29px;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    @media screen and (width >=768px){
        margin: 0;
    }
    
`;
const StyledIconDate = styled.img`
    width: 20px;
`;
const StyledMainMessages = styled.div`
    @media screen and (width >=768px){
        width: 100%;
        height: 100%;
        padding: 50px;
    }
    `;
const StyledButtons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;
const StyledNameButtons = styled.p`
    display: none;
    @media screen and (width >=768px){
        display:block;
    }
    `;
const StyledModifyDate = styled.form`
    display: ${({$isVisible})=>$isVisible ? 'flex':'none'};
    background-color: ${COLORS.egg};
    padding: 20px 20px;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    `;
const StyledInputDate = styled.input`
   border-style: none;
   background-color: transparent;
   `;
const StyledBoxDates = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   margin-bottom: 10px;

   @media screen and (width >=425px){
        flex-direction: row;
    }
   @media screen and (width >=1024px){
        width: 300px;
    }
`;
const StyledFormDates = styled.div`
   display: flex;
   flex-direction: column;
 
`;
const StyledTitleDate = styled.p`
   font-weight: ${FONTS.extraBold};
`;
const StyledButtonDate = styled.button`
    width: 100px;
    align-self: flex-end;
   background-color: ${COLORS.brown};
   color: white;
   border-style:none;
   padding: 10px;
`;


export {StyledTitleDate,StyledButtonDate,StyledFormDates,StyledBoxDates,StyledInputDate,StyledModifyDate,StyledNameButtons,StyledButtons,StyledMainMessages,StyledIconDate,StyledBoxDate,StyledBoxMessages}