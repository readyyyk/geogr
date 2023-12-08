import {FC, ReactNode} from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';
import {Button} from '@/components/ui/button.tsx';

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
                    onClick={() => void onSubmit()}
                >
                    Подтвердить
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Question;
