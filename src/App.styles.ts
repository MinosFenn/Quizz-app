import styled, { createGlobalStyle } from 'styled-components';
import { findByLabelText } from '@testing-library/react';

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background: white-smoke;
    background-color: white-smoke;
    display: flex;
    justify-content: center;
}
h1 {
    font-family:'Paytone One';
}
* { 
    box-sizing: border-box;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
}

`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> h1 {
    margin-top: -20px;
    background-color: #fed8b1;
    padding: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;


}

> p {
    color: #fff;
}

.score {
    font-size: 2rem;
    margin: 0;
    background-color: orange;
    border-radius: 20px;
    padding: 10px;
}
`