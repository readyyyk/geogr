import {FC, useState} from 'react';
import {
    QuestionProps,
    SelectQuestion as ISelectQuestion,
} from '@/types/questions.ts';
import Question, {
    createContainerClassName as createCN,
    LabelImage,
    LabelText,
} from '@/components/Question.tsx';
import {Checkbox} from '@/components/ui/checkbox.tsx';

type Props = ISelectQuestion &
    QuestionProps & {
        readonly type: 'select';
    };

const SelectQuestion: FC<Props> = ({
    num,
    title,
    options,
    answer,
    assets = null,
    onSubmit = (selected) => console.log(selected),
    containerClassName,
    elClassName,
}) => {
    const [isAnswered, setIsAnswered] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);
    const addSelected = (value: string) =>
        setSelected((prev) => [...prev, value]);
    const removeSelected = (value: string) =>
        setSelected((prev) => prev.filter((v) => v !== value));

    const optionsElements = options.map((option, i) => {
        const checkbox = (
            <Checkbox
                disabled={isAnswered}
                value={`${option}`}
                id={`options-${option}`}
                onCheckedChange={(checked) => {
                    checked ? addSelected(option) : removeSelected(option);
                }}
                className={assets ? 'bg-white' : 'bg-transparent'}
            />
        );
        return assets ? (
            <LabelImage
                option={option}
                asset={assets[i]}
                isAnswered={isAnswered}
                elClassName={elClassName}
                isCorrect={answer.includes(option)}
                isSelected={selected.includes(option)}
            >
                {checkbox}
            </LabelImage>
        ) : (
            <LabelText
                option={option}
                isAnswered={isAnswered}
                elClassName={elClassName}
                isCorrect={answer.includes(option)}
                isSelected={selected.includes(option)}
            >
                {checkbox}
            </LabelText>
        );
    });
    return (
        <Question
            num={num}
            title={title}
            submitDisabled={selected === null}
            onSubmit={() =>
                isAnswered ? onSubmit(selected!) : setIsAnswered(true)
            }
        >
            <div className={createCN(assets, containerClassName)}>
                {...optionsElements}
            </div>
        </Question>
    );
};

export default SelectQuestion;
