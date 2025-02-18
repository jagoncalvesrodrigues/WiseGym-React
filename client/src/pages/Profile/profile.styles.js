import styled from "styled-components";

//PROFILE
const StyledMainBoxProfile = styled.div`
    @media screen and (width >= 768px){
        display: flex;
    }
`;
const StyledInfoPofile = styled.div`
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
const StyledProfile = styled.div`
    width: 100%;
    padding: 10px;
    height: 497px;
    background-image: url('/assets/images/imgs/fondo-profile.jpg');
    padding-bottom: 41px;
    margin-bottom: 10px;
    @media screen and (width >= 768px){
        padding: 10px;
    }
    @media screen and (width >= 1024px){
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    `;
const StyleImageBoxProfile = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    
    @media screen and (width >= 768px){
        justify-content: left;
    }

`;
const StyledBoxInputEdit = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid white;
`;
const StyleImageProfile = styled.div`
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background-color: black;

`;
const StyledProfileForm = styled.div`
    color: white;
    gap: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const StyledInput = styled.input`
    border-style: none;
    background-color: transparent;
    outline: none;
    color: white;
    padding: 10px;
    width: 100%;
`;
//SUBSCRIPTIONS

const StyledSubscriptions = styled.div`
    width: 100%;

    @media screen and (width >= 1024px) {
        display: flex;
        gap: 10px;
    }
`;
export {StyledInfoPofile,StyledMainBoxProfile,StyledSubscriptions,StyledBoxInputEdit,StyledInput,StyleImageBoxProfile,StyleImageProfile,StyledProfile,StyledProfileForm}