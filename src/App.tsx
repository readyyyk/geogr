import CenterLayout from '@/components/CenterLayout.tsx';
import SelectQuestion from '@/components/SelectQuestion.tsx';
import QuizQuestion from '@/components/QuizQuestion.tsx';

import data from './assets/QUESTIONS.ts';
import {useState} from 'react';

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = data[currentQuestionIndex];
    return (
        <CenterLayout>
            {currentQuestion.type === 'quiz' ? (
                <QuizQuestion
                    key={`question-${currentQuestionIndex}`}
                    onSubmit={(selected) => {
                        setCurrentQuestionIndex((prev) => prev + 1);
                        console.log(selected);
                    }}
                    num={currentQuestionIndex + 1}
                    {...currentQuestion}
                />
            ) : (
                <SelectQuestion
                    key={`question-${currentQuestionIndex}`}
                    onSubmit={(selected) => {
                        setCurrentQuestionIndex((prev) => prev + 1);
                        console.log(selected);
                    }}
                    num={currentQuestionIndex + 1}
                    {...currentQuestion}
                />
            )}
        </CenterLayout>
    );
};

export default App;
