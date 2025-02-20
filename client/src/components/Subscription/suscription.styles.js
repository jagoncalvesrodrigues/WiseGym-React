import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const StyledBoxSuscription = styled.div`
    width: 100%;
    height: 984px;
`;
const StyledImageSubscription = styled.div`
    width: 100%;
    height: 50%;
    background-image: url('/assets/images/imgs/plan-professional.jpg');
    background-position: center;
    background-size: cover;
`;
const StyledBoxInfoSubscription = styled.div`
    background-color: ${COLORS.black};
    height: 50%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledBoxInfoSub = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding-top: 18px;
    padding-bottom: 18px;
`;
const StyledTitleSubscription = styled.p`
    margin: 0;
    color: rgba(240,187,120,0.6);
    letter-spacing:8px;
    font-weight: ${FONTS.bold};
    font-size: 1.25rem;
    align-self: center;
`;
const StyledBold = styled.p`
    font-weight: ${FONTS.bold};
    font-size: 24px;
`;
const StyledButtonChange = styled.div`
    background-color: rgba(240,187,120,0.6);
    padding-left: 46px;
    padding-right: 46px;
`;

export {StyledButtonChange,StyledBold,StyledBoxInfoSub,StyledTitleSubscription,StyledBoxSuscription,StyledBoxInfoSubscription,StyledImageSubscription}