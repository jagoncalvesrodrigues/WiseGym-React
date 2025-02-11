import styled from "styled-components";

const StyledBox = styled.nav`
    height: 183px;
    width: 100%;
    display: flex;
    padding: 57px 62px;
    justify-content: space-between;
`;
const StyledLogo = styled.a`
    height:83px;
    display: flex;
`;
const StyledMenuOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: 50%;
`;
const StyledNavItem = styled.li`
    color: white;
`;



export {StyledBox,StyledLogo,StyledMenuOptions,StyledNavItem}