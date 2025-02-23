import styled from "styled-components";
import { FONTS } from "../../constants/fonts";

const StyledBoxOption = styled.div`
    width: 100%;
    height: 200px;
    background-image: url('/assets/images/imgs/box-booking.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;
const StyledMainBoxBooking = styled.div`
    width: 100%;
`;
const StyledOPtionTitle = styled.p`
    color: white;
    font-size: 2rem;
    font-weight: ${FONTS.semiBold};
    padding-left: 90px;
`;

export {StyledOPtionTitle,StyledBoxOption,StyledMainBoxBooking}