import styled from 'styled-components';

export const Wrapper = styled.div`
max-width: 1600px;
background: white;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
border: 2px solid black;
padding: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
text-align: center;

p {
    font-size: 1rem;

}
`

export const QuestionWrapper = styled.div`
background: black;
margin-top: 100px;

color: white;
padding: 20px;
text-align: center;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

p {
    position: relative;
    font-size: 2rem;
    top: -20px;

}
`
export const QuestionNbWrapper = styled.div`
position: relative;
top: -50px;
background: orange;
color: white;
padding: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
text-align: center;
width: 120px;
height: 70px;
border-radius: 10px;
border: 1px solid white;


p {
    font-size: 2rem;
    position: relative;
    font-family: 'Paytone One';

    top: -40px;
}
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}



export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition: all 0.5s ease;

:hover {
    opacity: 0.8;
}

button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin 5px 0;
    background: ${({ correct, userClicked }) =>
    correct
    ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
    : !correct && userClicked
    ? 'linear-gradient(90deg, #ff5656, #c16868)'
    : 'linear-gradient(90deg, #ffa31a, #ffbf00)'};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25)
}
`;