import React from 'react';
// types
import { AnswerObject } from '../App'; 
// styles
import { Wrapper, ButtonWrapper, QuestionWrapper,QuestionNbWrapper } from './QuestionCard.styles';

type Props = { 
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions, }) => (
<div>
    <QuestionWrapper>
        <QuestionNbWrapper>
    <p className="number">
        {questionNr} / {totalQuestions}
    </p>
    </QuestionNbWrapper>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    </QuestionWrapper>
    <Wrapper> 
        {answers.map(answer => (
            <ButtonWrapper 
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            >
                <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer }} />
                </button>
            </ButtonWrapper>
        ))}
    </Wrapper>
</div>
);

export default QuestionCard;