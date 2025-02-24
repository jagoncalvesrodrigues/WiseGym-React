import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledMainBoxBooking =  styled.div`
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
const StyledBoxCalendar =  styled.div`
    width: 100%;
    height: 330px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
`;
const StyledBoxReserve =  styled.div`
    width: 100%;
    height: 100%;
`;
const StyledBoxDay =  styled.div`
    width: 60px;
    height: 60px;
    background-color: ${COLORS.egg};
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
`;

export {StyledBoxReserve,StyledBoxDay,StyledBoxCalendar,StyledMainBoxBooking}