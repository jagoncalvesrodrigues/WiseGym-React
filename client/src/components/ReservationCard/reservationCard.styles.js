import styled from "styled-components";

const StyledBoxReservationCard =  styled.div`
    background-image: ${({ $photo }) => `url(${ $photo })`};
    background-position: center;
    background-size: cover;
    height: 197px;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (width >= 768px){
        width: 45%;
        height: 200px;
    }
    @media screen and (width >= 1024px){
        width: 30%;
        height: 300px;
    }
`;
const StyledDate =  styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledTitleCard =  styled.p`
    font-size: 1.5rem;
    margin: 0;
`;

export {StyledTitleCard,StyledDate,StyledBoxReservationCard}