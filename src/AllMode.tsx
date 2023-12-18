import {FC, useContext, useState} from 'react';
import {AnswersContext} from '@/AnswersContext.tsx';
import {AnswersContextType} from '@/types/answers.ts';
import data from '@/assets/QUESTIONS.ts';
import QuizQuestion from '@/components/QuizQuestion.tsx';
import SelectQuestion from '@/components/SelectQuestion.tsx';
import PureQuestion from '@/components/PureQuestion.tsx';
import Result from '@/components/Result.tsx';

interface Props {
    back: () => void;
}

const AllMode: FC<Props> = ({back}) => {
    const {addAnswer} = useContext(AnswersContext) as AnswersContextType;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = data[currentQuestionIndex];
    return currentQuestionIndex < data.length ? (
        currentQuestion.type === 'quiz' ? (
            <QuizQuestion
                {...currentQuestion}
                num={currentQuestionIndex + 1}
                key={`question-${currentQuestionIndex}`}
                onSubmit={(selected) => {
                    setCurrentQuestionIndex((p) => p + 1);
                    addAnswer({
                        type: 'quiz',
                        answer: selected,
                    });
                }}
            />
        ) : currentQuestion.type === 'select' ? (
            <SelectQuestion
                {...currentQuestion}
                num={currentQuestionIndex + 1}
                key={`question-${currentQuestionIndex}`}
                onSubmit={(selected) => {
                    setCurrentQuestionIndex((p) => p + 1);
                    addAnswer({
                        type: 'select',
                        answer: selected,
                    });
                }}
            />
        ) : (
            <PureQuestion
                {...currentQuestion}
                num={currentQuestionIndex + 1}
                key={`question-${currentQuestionIndex}`}
                onSubmit={() => {
                    setCurrentQuestionIndex((p) => p + 1);
                }}
            />
        )
    ) : (
        <Result mode={'all'} back={back} />
    );
};

export default AllMode;
