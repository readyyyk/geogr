import {FC, useState} from 'react';
import {
    QuestionProps,
    SelectQuestion as ISelectQuestion,
} from '@/types/questions.ts';
import {Label} from '@/components/ui/label.tsx';
import Question from '@/components/Question.tsx';
import {Checkbox} from '@/components/ui/checkbox.tsx';
import {twMerge} from 'tailwind-merge';

type Props = ISelectQuestion &
    QuestionProps & {
        readonly type: 'select';
    };

const SelectQuestion: FC<Props> = ({
    num,
    title,
    options,
    assets = null,
    containerClassName = null,
    elClassName = null,
}) => {
    const [selected, setSelected] = useState<string[]>([]);
    const addSelected = (value: string) =>
        setSelected((prev) => [...prev, value]);
    const removeSelected = (value: string) =>
        setSelected((prev) => prev.filter((v) => v !== value));
    const onSubmit = () => {
        console.log(selected);
    };
    const optionsElements = options.map((option, i) =>
        assets ? (
            <Label
                htmlFor={`options-${option}`}
                className={twMerge(
                    'aspect-square w-48 p-3 rounded-2xl shadow-lg transition-all border-4 border-primary relative overflow-hidden cursor-pointer bg-blur',
                    selected.includes(option)
                        ? 'shadow-primary'
                        : 'shadow-none',
                    elClassName,
                )}
                style={{
                    backgroundImage: 'url(' + assets[i] + ')',
                    backgroundSize: 'cover',
                }}
            >
                <Checkbox
                    value={`${option}`}
                    id={`options-${option}`}
                    onCheckedChange={(checked) => {
                        checked ? addSelected(option) : removeSelected(option);
                    }}
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
                <Checkbox
                    value={`${option}`}
                    id={`options-${option}`}
                    onCheckedChange={(checked) => {
                        checked ? addSelected(option) : removeSelected(option);
                    }}
                />
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
            <div
                className={twMerge(
                    'grid grid-cols-1 md:grid-cols-2 justify-center',
                    assets && 'place-items-center gap-y-8',
                    containerClassName,
                )}
            >
                {...optionsElements}
            </div>
        </Question>
    );
};

export default SelectQuestion;
