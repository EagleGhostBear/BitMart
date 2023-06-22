import React from 'react';
import styled from 'styled-components';




const StyledButton = styled.button`
    padding: 0px;
    box-sizing: border-box;
    font: inherit;
    margin: 0px;
    -webkit-tap-highlight-color: transparent;
    overflow: visible;
    text-transform: none;
    appearance: button;
    cursor: pointer;
    border-radius: 0px;
    font-family: 'Noto Sans', 'malgun gothic', AppleGothic, dotum, sans-serif;
    flex: 1 1 0%;
    border: 1px solid rgb(244, 244, 244);
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    border-bottom-width: 0px;
    background-color: rgb(255, 255, 255);
    color: rgb(95, 0, 128);
    margin-top: 0px;
    `;



    
const Tab = ({ text, ...rest }) => {
    
    return (
        
        <StyledButton {...rest}>
            {text}
        </StyledButton>
    
    );
};


export { StyledButton };
export default Tab;