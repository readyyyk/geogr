export type QuestionsAnswersTypes =
    | {
          type: 'quiz';
          answer: string;
          onSubmit?: (selected: string) => void;
      }
    | {
          type: 'select';
          answer: string[];
          onSubmit?: (selected: string[]) => void;
      }
    | {
          type: 'pure';
          answer: string;
          onSubmit?: () => void;
      };

export type QuestionsAnswersStorageRecordType = QuestionsAnswersTypes;
export type QuestionsAnswersStorageType =
    Array<QuestionsAnswersStorageRecordType>;

export type AnswersContextType = {
    answers: QuestionsAnswersStorageType;
    addAnswer: (answer: QuestionsAnswersStorageRecordType) => void;
    clearAnswers: () => void;
};
