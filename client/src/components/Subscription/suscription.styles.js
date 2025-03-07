import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const StyledBoxSuscription = styled.div`
    display: flex;
    width: 100%;
    height: 984px;
    flex-direction: column;
    @media screen and (width>=1024px){
        flex-direction: row;
        height: 500px;
    }
    @media screen and (width>=1440px){
        flex-direction: row;
        height: 800px;
    }
`;
const StyledImageSubscription = styled.div`
    width: 100%;
    height: 50%;
    background-image: url('/assets/images/imgs/plan-professional.jpg');
    background-position: center;
    background-size: cover;
    @media screen and (width>=425px){
        background-position: 0px -200px;
    }
    @media screen and (width>=1024px){
        background-position: 0px 0px;
        width: 42%;
        height: 100%;
    } 
    @media screen and (width>=1024px){
        background-position: 0px 0px;
        width: 42%;
        height: 100%;
    } 
`;
const StyledBoxInfoSubscription = styled.div`
    background-color: ${COLORS.black};
    height: 50%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (width>=1024px){
        width: 58%;
        height: 100%;
    }
    @media screen and (width>=1440px){
        align-items: start;
        
    }
`;
const StyledBoxInfoSub = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding-top: 18px;
    padding-bottom: 18px;
    
`;
const StyledDescription = styled.div`
    
    @media screen and (width>=1440px){
        margin-left: 80px;
    }
`;
const StyledTitleSubscription = styled.p`
    margin: 0;
    color: rgba(240,187,120,0.6);
    letter-spacing:8px;
    font-weight: ${FONTS.bold};
    font-size: 1.25rem;
    align-self: center;
    @media screen and (width>=1024px){
        font-size: 2rem;
    }
    @media screen and (width>=1440px){
        align-self: flex-start;
    }
`;
const StyledBold = styled.p`
    font-weight: ${FONTS.bold};
    font-size: 24px;
`;
const StyledButtonChange = styled.button`
    background-color: rgba(240,187,120,0.6);
    padding-left: 46px;
    padding-right: 46px;
    color:white;
    border-style: none;
    height: 43px;
    @media screen and (width>=1440px){
        position: absolute;
        right: 50px;   
    }
`;




export {StyledDescription,StyledButtonChange,StyledBold,StyledBoxInfoSub,StyledTitleSubscription,StyledBoxSuscription,StyledBoxInfoSubscription,StyledImageSubscription}