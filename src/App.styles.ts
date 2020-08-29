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
    font-family: 'Noto Sans JP', sans-serif;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

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
    margin: 20px;
    background-color: orange;
    border-radius: 20px;
    padding: 10px;
    font-family: 'Paytone One';

}

.start,
 .next {
    cursor: pointer;
    background-color: orange;
    padding: 10px;
    border: 1px solid white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);

    transition: box-shadow 0.3s ease-in-out;    border-radius: 10px;
    height: 80px;
    margin: 20px 0;
    font-family: 'Paytone One';
    font-weight: 400;
    font-size: 40px;
    color: white;

  

 
}

.start:hover, .next:hover {

    box-shadow: 0 1px 2px rgba(0,0,0,0.15);


}
`