import {FC, useState} from 'react';
import {
    QuestionProps,
    PureQuestion as IPureQuestion,
} from '@/types/questions.ts';
import Question from '@/components/Question.tsx';
import {cn} from '@/lib/utils.ts';

type Props = IPureQuestion &
    QuestionProps & {
        readonly type: 'pure';
    };

const PureQuestion: FC<Props> = ({
    num,
    title,
    answer,
    onSubmit = () => console.log('Answered pure question'),
}) => {
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    return (
        <Question
            num={num}
            title={title}
            onSubmit={() => (isAnswered ? onSubmit() : setIsAnswered(true))}
            submitDisabled={false}
        >
            <h2
                className={cn(
                    'text-2xl text-green-500 text-center',
                    isAnswered ? 'block' : 'hidden',
                )}
            >
                {answer}
            </h2>
        </Question>
    );
};

export default PureQuestion;
