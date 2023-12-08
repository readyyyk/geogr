import {Questions} from '@/types/questions.ts';

const QUESTIONS: Questions = [
    {
        title: "What is Earth's largest ocean?",
        type: 'quiz',
        assets: [
            'https://r-randimg-py.fly.dev/picsum/' +
                encodeURIComponent('Atlantic ocean') +
                '/128x128',
            'https://r-randimg-py.fly.dev/picsum/' +
                encodeURIComponent('Pacific ocean') +
                '/128x128',
            'https://r-randimg-py.fly.dev/picsum/' +
                encodeURIComponent('Indian ocean') +
                '/128x128',
            'https://r-randimg-py.fly.dev/picsum/' +
                encodeURIComponent('Arctic ocean') +
                '/128x128',
        ],
        options: [
            'Atlantic ocean',
            'Pacific ocean',
            'Indian ocean',
            'Arctic ocean',
        ],
        answer: 'Pacific ocean',
    },
];

export default QUESTIONS;
