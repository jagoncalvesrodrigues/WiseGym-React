import styled from "styled-components";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (width>=768px){
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4,1fr);
    }
    @media screen and (width>=1024px){

        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2,1fr);
    }

`

export {StyledMainDiv}
