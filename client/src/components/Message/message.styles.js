import styled from "styled-components";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

const StyledBoxMessage =  styled.div`
    width: 100%;
    padding:20px;
    border-top: 1px solid rgba(0,0,0,0.5);
    border-bottom: 1px solid rgba(0,0,0,0.5);
    box-shadow: 2px 3px 10px rgba(0,0,0,0.5);
    @media screen and (width >=1024px){
        padding: 50px;
    }
`;
const StyledTitle =  styled.h2`

`;
const StyledHeaderMessage =  styled.div`
    @media screen and (width >=1024px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const StyledTextMessage =  styled.p`
    margin-top: 50px;
    font-size: 16px;
    font-weight: ${FONTS.regular};
`;

const StyledNoMessages =  styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
`;
const StyledBoxAdmin =  styled.div`
    display: flex;
    gap: 10px;
    justify-content: end;
`;

const StyledBoxDeleted = styled.div`
    position: fixed;
    width: 50%;
    display: flex;
    justify-content: center;
    height: 20%;
    top:40%;
    text-align: center;
    align-items: center;
    align-self: center;
    background-color: ${COLORS.egg};
    box-shadow: 4px ;
`;

export {StyledBoxDeleted,StyledBoxAdmin,StyledNoMessages,StyledTextMessage,StyledHeaderMessage,StyledTitle,StyledBoxMessage}