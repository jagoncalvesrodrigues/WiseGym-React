import styled from "styled-components";

const StyledMainReservation = styled.div`
    padding:10px;
    padding-top:20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (width >= 768px){
        width: 65%;
        height: 100%;
        padding: 10px;
        margin-left: auto;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media screen and (width >= 1024px){
        width: 80%;
    }
`;

export {StyledMainReservation}