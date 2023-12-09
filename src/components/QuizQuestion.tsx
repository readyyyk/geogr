import {FC, useState} from 'react';
import {
    QuestionProps,
    QuizQuestion as IQuizQuestion,
} from '@/types/questions.ts';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group.tsx';
import Question, {
    createContainerClassName as createCN,
    LabelImage,
    LabelText,
} from '@/components/Question.tsx';

type Props = IQuizQuestion &
    QuestionProps & {
        readonly type: 'quiz';
    };

const QuizQuestion: FC<Props> = ({
    num,
    title,
    options,
    answer,
    onSubmit = (selected) => console.log(selected),
    assets = null,
    elClassName,
    containerClassName,
}) => {
    const [isAnswered, setIsAnswered] = useState<boolean>(false);
    const [selected, setSelected] = useState<null | string>(null);
    const optionsElements = options.map((option, i) => {
        const button = (
            <RadioGroupItem
                disabled={isAnswered}
                value={`${option}`}
                id={`options-${option}`}
                className={assets ? ' bg-white' : ' bg-transparent'}
            />
        );

        return assets ? (
            <LabelImage
                option={option}
                asset={assets[i]}
                isAnswered={isAnswered}
                elClassName={elClassName}
                isCorrect={answer === option}
                isSelected={selected === option}
            >
                {button}
            </LabelImage>
        ) : (
            <LabelText
                option={option}
                isAnswered={isAnswered}
                elClassName={elClassName}
                isCorrect={answer === option}
                isSelected={selected === option}
            >
                {button}
            </LabelText>
        );
    });
    return (
        <Question
            num={num}
            title={title}
            onSubmit={() =>
                isAnswered ? onSubmit(selected!) : setIsAnswered(true)
            }
            submitDisabled={selected === null}
        >
            <RadioGroup
                onValueChange={(value) => setSelected(value)}
                className={createCN(assets, containerClassName)}
            >
                {...optionsElements}
            </RadioGroup>
        </Question>
    );
};

export default QuizQuestion;
