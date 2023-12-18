import {QuestionsAnswersTypes} from '@/types/answers.ts';

export type BaseQuestion = {
    title: string;
    options: string[];
    assets?: string[] | null;
};

export type QuizQuestion = BaseQuestion &
    QuestionsAnswersTypes & {
        type: 'quiz';
    };

export type SelectQuestion = BaseQuestion &
    QuestionsAnswersTypes & {
        type: 'select';
    };

export type PureQuestion = Omit<
    BaseQuestion &
        QuestionsAnswersTypes & {
            type: 'pure';
        },
    'assets' | 'options'
>;

export type QuestionProps = {
    num: number;
    containerClassName?: string;
    elClassName?: string;
};

export type Question = QuizQuestion | SelectQuestion | PureQuestion;

export type Questions = Array<Question>;
