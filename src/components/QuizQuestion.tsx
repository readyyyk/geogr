import {FC, useState} from 'react';
import {
    QuestionProps,
    QuizQuestion as IQuizQuestion,
} from '@/types/questions.ts';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group.tsx';
import {Label} from '@/components/ui/label.tsx';
import Question from '@/components/Question.tsx';
import {twMerge} from 'tailwind-merge';

type Props = IQuizQuestion &
    QuestionProps & {
        readonly type: 'quiz';
    };

const QuizQuestion: FC<Props> = ({
    num,
    title,
    options,
    assets = null,
    elClassName = null,
    containerClassName = null,
}) => {
    const [selected, setSelected] = useState<null | string>(null);
    const onSubmit = () => {
        console.log(selected);
    };
    const optionsElements = options.map((option, i) =>
        assets ? (
            <Label
                htmlFor={`options-${option}`}
                className={twMerge(
                    'aspect-square w-48 p-3 rounded-2xl shadow-lg transition-all border-4 border-primary relative overflow-hidden cursor-pointer bg-blur',
                    selected === option ? 'shadow-primary' : 'shadow-none',
                    elClassName,
                )}
                style={{
                    backgroundImage: 'url(' + assets[i] + ')',
                    backgroundSize: 'cover',
                }}
            >
                <RadioGroupItem
                    value={`${option}`}
                    id={`options-${option}`}
                    className={'bg-white drop-shadow-2xl'}
                />
                <h2
                    className={
                        'text-lg backdrop-blur text-black text-center absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-20 rounded-b-lg'
                    }
                >
                    {option}
                </h2>
            </Label>
        ) : (
            <div
                className={twMerge(
                    'flex items-center space-x-2 justify-center',
                    elClassName,
                )}
            >
                <RadioGroupItem value={`${option}`} id={`options-${option}`} />
                <Label htmlFor={`options-${option}`} className={'text-2xl'}>
                    {option}
                </Label>
            </div>
        ),
    );
    return (
        <Question
            num={num}
            title={title}
            onSubmit={onSubmit}
            submitDisabled={selected === null}
        >
            <RadioGroup
                onValueChange={(value) => setSelected(value)}
                defaultValue="comfortable"
                className={twMerge(
                    'grid grid-cols-1 md:grid-cols-2 justify-center',
                    assets && 'place-items-center gap-y-8',
                    containerClassName,
                )}
            >
                {...optionsElements}
            </RadioGroup>
        </Question>
    );
};

export default QuizQuestion;
