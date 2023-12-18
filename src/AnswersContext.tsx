import {createContext, FC, ReactNode, useState} from 'react';
import {
    AnswersContextType,
    QuestionsAnswersStorageType,
} from '@/types/answers.ts';

export const AnswersContext = createContext<AnswersContextType | null>(null);

type Props = {
    children: ReactNode;
};
const AnswersProvider: FC<Props> = ({children}) => {
    const [state, setState] = useState<QuestionsAnswersStorageType>([]);
    return (
        <AnswersContext.Provider
            value={{
                answers: state,
                addAnswer: (answer) => setState((prev) => [...prev, answer]),
                clearAnswers: () => setState([]),
            }}
        >
            {children}
        </AnswersContext.Provider>
    );
};

export {AnswersProvider};
