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
    @media screen and (width >= 1024px){
        height: 660px;
    }

`;
const StyledBoxReserve =  styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: ${({$showCalendarBox})=>($showCalendarBox ? "flex":"none")};
    flex-direction: column;
    gap: 30px;
    @media screen and (width >= 768px){
        padding:40px;
    }
    @media screen and (width >= 1024px){
        flex-direction: row;    
    }
`;
const StyledMonthYear =  styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`;
const StyledBoxOptions =  styled.div`
    display: ${({$showCalendarBox})=>($showCalendarBox ? "none":"block")};
    
`;
const StyledBoxDay =  styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({ isSelected }) => (isSelected ? COLORS.brown : COLORS.egg)};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    transition: background-color 0.3s, color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    @media screen and (width >= 1024px){
        width: 90px;
        height: 90px;
    }
`;
const StyledTitleMonth =  styled.p`
    font-weight: ${FONTS.bold};
`;
const StyledBoxDays =  styled.div`
    
`;
const StyledBoxHours =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
`;
const StyledHour =  styled.div`
    background-color: ${({ isSelected }) => (isSelected ? COLORS.brown : COLORS.egg)};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    transition: background-color 0.3s, color 0.3s;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledBoxDesktopCalendar =  styled.div`
    @media screen and (width >= 1024px){
        width: 70%;
    }
`;
const StyledBoxDesktopHours =  styled.div`
    display: flex;
    flex-direction: column;
    border-top: solid 1px black;
    @media screen and (width >= 1024px){
        border-left: solid 1px black;
        border-top: none;
        width: 30%;
        padding: 20px;
    }
`;
const StyledButtonReserve =  styled.button`
    margin-top: auto;
    background-color: ${COLORS.brown};
    color: white;
    border-style: none;
    height: 44px;
`;
const StyledCloseReserve =  styled.img`
        position: absolute;
        top: 115px;
        right: 25px;
        width: 40px;
    @media screen and (width >= 768px){
        right: 25px;
        top:25px;
    }
`;

const StyledConfirmReservePopUp = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.brown50};
    z-index: 120;
    position: fixed;
    display: flex;
    align-items: end;
    top: 0;
    justify-content: center;
    @media screen and (width >= 768px){
        align-items: center;
    }
`;
const StyledBoxConfirmationSchedule = styled.div`
    width: 100vw;
    height: 600px;
    background-color: ${COLORS.egg};
    display: flex;
    flex-direction: column;
    padding: 50px;
    font-size: 1.1rem;
    gap: 10px;
    @media screen and (width >= 768px){
        gap: 20px;
        width: 600px;
        height: 400px;
    }
`;
const StyledBoxButtonsBookingConfirm = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    gap: 20px;
    margin: auto;
`;
const StyledBackScheduleButton = styled.button`
    border-style: none;
    background-color: ${({$bg})=>$bg};
    color:${({$lettersC})=>$lettersC};
    padding: 11px;
    width: 150px;
`;
const StyledInputInfo = styled.input`
    border-style: none;
    padding: 7px;
`;




export {StyledInputInfo,StyledBackScheduleButton,StyledBoxButtonsBookingConfirm,StyledBoxConfirmationSchedule,StyledConfirmReservePopUp,StyledCloseReserve,StyledButtonReserve,StyledBoxDesktopHours,StyledBoxDesktopCalendar,StyledBoxOptions,StyledHour,StyledBoxHours,StyledTitleMonth,StyledBoxDays,StyledMonthYear,StyledBoxReserve,StyledBoxDay,StyledBoxCalendar,StyledMainBoxBooking}