import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

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
    padding: 10px;
    `;
const StyledMonthYear =  styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
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
const StyledTitleMonth =  styled.p`
    font-weight: ${FONTS.bold};
`;
const StyledBoxDays =  styled.div`
    
`;

export {StyledTitleMonth,StyledBoxDays,StyledMonthYear,StyledBoxReserve,StyledBoxDay,StyledBoxCalendar,StyledMainBoxBooking}