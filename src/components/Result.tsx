import {
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from '@/components/ui/card.tsx';
import {Badge} from '@/components/ui/badge.tsx';
import {AnswersContextType} from '@/types/answers.ts';
import {AnswersContext} from '@/AnswersContext.tsx';
import {FC, useContext} from 'react';
import QUESTIONS, {CORRECT_NUMBER} from '@/assets/QUESTIONS.ts';
import {Button} from '@/components/ui/button.tsx';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip.tsx';

interface Props {
    mode: 'all' | 'captain';
    back: () => void;
}
const Result: FC<Props> = ({back, mode}) => {
    const {answers} = useContext(AnswersContext) as AnswersContextType;
    console.log(answers);

    const correctNumber = answers.reduce((acc, cur, i) => {
        const correct = QUESTIONS[i].answer;
        if (cur.type === 'pure') {
            return acc;
        }
        if (cur.type === 'quiz') {
            return acc + (cur.answer === correct ? 1 : 0);
        }
        return acc + cur.answer.filter((v) => correct.includes(v)).length;
    }, 0);
    const incorrectNumber = answers.reduce((acc, cur, i) => {
        const correct = QUESTIONS[i].answer;
        if (cur.type === 'pure') {
            return acc;
        }
        if (cur.type === 'quiz') {
            return acc;
        }
        return acc + cur.answer.filter((v) => !correct.includes(v)).length;
    }, 0);

    const NumericResults =
        mode === 'all' ? (
            <CardContent className="justify-center flex space-x-5">
                <Badge className="text-green-500 bg-green-50 px-4 py-1 font-mono text-2xl font-bold rounded-full">
                    {correctNumber}/{CORRECT_NUMBER}
                </Badge>
                {incorrectNumber !== 0 && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Badge className="text-red-500 bg-red-50 px-4 py-1 font-mono text-2xl font-bold rounded-full">
                                    {incorrectNumber}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className={'w-32'}>
                                    Number of selected
                                    <span className={'text-red-500'}>
                                        {' '}
                                        incorrect{' '}
                                    </span>
                                    answers in questions with multiple answers
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </CardContent>
        ) : null;

    return (
        <Card className={''}>
            <CardHeader className="pb-4">
                <CardTitle className="text-center text-4xl font-bold">
                    Результаты
                </CardTitle>
            </CardHeader>
            {NumericResults}
            <CardFooter className="flex justify-center space-x-4">
                <Button variant={'outline'} onClick={back}>
                    Назад
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Result;
