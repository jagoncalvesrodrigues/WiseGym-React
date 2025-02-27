import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledBoxStore = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:20px;
    text-align: center;
`;
const StyledBoxLogo = styled.div`
    width: 150px;
    height: 150px;
    background-image:url('/assets/images/logos/Logo_sencillo.png');
    background-position: center;
    background-size: cover;
    
    animation: spin 25s linear infinite; 
    @keyframes spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
    @media screen and (width>=425px){
        width: 300px;
        height: 300px;
    }
    
`;
const StyledButtonComeBack = styled.button`
    background-color: ${COLORS.black};
    color: white;
    padding: 15px;
    width: 200px;
    border-style: none;
`;

export {StyledButtonComeBack,StyledBoxStore,StyledBoxLogo}