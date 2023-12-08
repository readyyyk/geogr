export type QuestionsAnswersTypes =
    | {
          type: 'quiz';
          answer: string;
      }
    | {
          type: 'select';
          answer: string[];
      };

export type QuestionsAnswersStorageRecordType = {
    num: string;
    answer: QuestionsAnswersTypes;
};
export type QuestionsAnswersStorageType =
    Array<QuestionsAnswersStorageRecordType>;

export type AnswersContextType = {
    answers: QuestionsAnswersStorageType;
    addAnswer: (answer: QuestionsAnswersStorageRecordType) => void;
};
