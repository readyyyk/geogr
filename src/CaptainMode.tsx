import {FC, useState} from 'react';
import {CAPITAN_QUESTIONS as data} from '@/assets/QUESTIONS.ts';
import PureQuestion from '@/components/PureQuestion.tsx';
import Result from '@/components/Result.tsx';

interface Props {
    back: () => void;
}
const CaptainMode: FC<Props> = ({back}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = data[currentQuestionIndex];
    return currentQuestionIndex < data.length ? (
        <PureQuestion
            {...currentQuestion}
            num={currentQuestionIndex + 1}
            key={`question-${currentQuestionIndex}`}
            onSubmit={() => {
                setCurrentQuestionIndex((p) => p + 1);
            }}
        />
    ) : (
        <Result mode={'captain'} back={back} />
    );
};

export default CaptainMode;
