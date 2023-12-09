import {FC, ReactNode, useState} from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';
import {Button} from '@/components/ui/button.tsx';
import {twMerge} from 'tailwind-merge';
import {Label} from '@radix-ui/react-label';

// Labels for every single option
interface LabelProps {
    option: string;
    isSelected: boolean;
    isAnswered: boolean;
    isCorrect: boolean;
    elClassName?: string;
    children: ReactNode;
}
export const LabelImage: FC<LabelProps & {asset: string}> = ({
    option,
    asset,
    isCorrect,
    elClassName,
    isSelected,
    isAnswered,
    children,
}) => {
    return (
        <Label
            htmlFor={`options-${option}`}
            className={twMerge(
                'aspect-square max-w-[12rem] w-[35dvw] md:w-48 p-3 rounded-2xl shadow-lg transition-all border-4 border-primary relative overflow-hidden cursor-pointer bg-blur',
                isSelected ? 'shadow-primary' : 'shadow-none',
                isAnswered
                    ? isSelected && 'shadow-lg shadow-red-500 border-red-500'
                    : '',
                isAnswered && isCorrect
                    ? 'shadow-lg shadow-green-500 border-green-500'
                    : '',
                elClassName,
            )}
            style={{
                backgroundImage: 'url(' + asset + ')',
                backgroundSize: 'cover',
            }}
        >
            {children}
            <h2 className="text-sm md:text-lg max-h-[50%] leading-5 backdrop-blur text-black text-center absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-20 rounded-b-lg">
                {option}
            </h2>
        </Label>
    );
};

export const LabelText: FC<LabelProps> = ({
    option,
    isCorrect,
    isAnswered,
    isSelected,
    elClassName,
    children,
}) => {
    return (
        <div
            className={twMerge(
                'flex items-center space-x-2',
                isAnswered && isSelected && 'text-red-500',
                isAnswered && isCorrect && 'text-green-500',
                elClassName,
            )}
        >
            {children}
            <Label
                htmlFor={`options-${option}`}
                className={'text-xl leading-7'}
            >
                {option}
            </Label>
        </div>
    );
};

export const createContainerClassName = (
    assets: null | string[],
    className?: string,
    isSingleRow: boolean = !assets,
) =>
    twMerge(
        'grid grid-cols-1 transition-all w-fit m-auto gap-3',
        !isSingleRow && 'grid-cols-2',
        assets && 'place-items-center gap-x-4 md:gap-8',
        className,
    );

interface Props {
    num: number;
    title: string;
    children: ReactNode;
    submitDisabled: boolean;
    onSubmit: (...props: any) => any;
}

const Question: FC<Props> = ({
    num,
    title,
    submitDisabled,
    onSubmit,
    children,
}) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    return (
        <Card>
            <CardHeader>
                <CardDescription>Вопрос №{num}</CardDescription>
                <CardTitle className={'text-center'}>{title}</CardTitle>
            </CardHeader>
            <CardContent className={'max-w-lg m-auto'}>{children}</CardContent>
            <CardFooter className={'flex justify-center'}>
                <Button
                    size={'lg'}
                    type={'submit'}
                    variant={'outline'}
                    disabled={submitDisabled}
                    onClick={() => {
                        setIsSubmitted(true);
                        onSubmit();
                    }}
                >
                    {isSubmitted ? 'Продолжить' : 'Ответить'}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Question;
