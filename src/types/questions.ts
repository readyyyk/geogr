import {QuestionsAnswersTypes} from '@/types/answers.ts';

export type QuizQuestion = QuestionsAnswersTypes & {
    type: 'quiz';
    title: string;
    options: string[];
    assets?: string[] | null;
};

export type SelectQuestion = QuestionsAnswersTypes & {
    type: 'select';
    title: string;
    options: string[];
    assets?: string[] | null;
};

export type QuestionProps = {
    num: number;
    containerClassName?: string | null;
    elClassName?: string | null;
};

export type Question = QuizQuestion | SelectQuestion;

export type Questions = Array<Question>;
