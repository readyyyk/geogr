import CenterLayout from '@/components/CenterLayout.tsx';
import SelectQuestion from '@/components/SelectQuestion.tsx';
import QuizQuestion from '@/components/QuizQuestion.tsx';

import data from './assets/QUESTIONS.ts';
import {useContext, useState} from 'react';
import {AnswersContext, AnswersProvider} from '@/AnswersContext.tsx';
import {AnswersContextType} from '@/types/answers.ts';
import Result from '@/Result.tsx';

const Application = () => {
    const {addAnswer} = useContext(AnswersContext) as AnswersContextType;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = data[currentQuestionIndex];
    return (
        <CenterLayout>
            {currentQuestionIndex < data.length ? (
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
                ) : (
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
                )
            ) : (
                <Result />
            )}
        </CenterLayout>
    );
};

const App = () => {
    return (
        <AnswersProvider>
            <Application />
        </AnswersProvider>
    );
};

export default App;
