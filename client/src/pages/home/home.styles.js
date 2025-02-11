import styled from "styled-components";

const StyledBoxHeader = styled.div`
    width: 100vw;
    height: 100vh;
    background-image:url('assets/images/imgs/main-banner-mobile.png');
    background-size: cover;
    background-position: center;
    
    @media screen and (width >= 768px){
        background-image:url('assets/images/imgs/main-banner-tablet.png');
    }
    @media screen and (width >= 1024px){
        background-image:url('assets/images/imgs/main-banner.png');
    }

`
const StyledJoinNow = styled.div`
    background-color: ${({$bg})=>$bg};
    width: 234px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left:calc(50% - 117px);
    bottom: 50px;
`

export {StyledBoxHeader,StyledJoinNow}