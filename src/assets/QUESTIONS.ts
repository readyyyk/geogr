import {Questions} from '@/types/questions.ts';

const QUESTIONS: Questions = [
    {
        type: 'quiz',
        title: 'What are the main components of the hydrosphere?',
        options: [
            'Atmosphere, hydrosphere, lithosphere, and biosphere',
            'Hydrosphere, lithosphere, biosphere, and anthroposphere',
            'Atmosphere, hydrosphere, biosphere, and geosphere',
            'Hydrosphere, lithosphere, biosphere, and pedosphere',
        ],
        assets: [
            'https://r-randimg-py.fly.dev/picsum/1/128x128',
            'https://r-randimg-py.fly.dev/picsum/2/128x128',
            'https://r-randimg-py.fly.dev/picsum/3/128x128',
            'https://r-randimg-py.fly.dev/picsum/4/128x128',
        ],
        answer: 'Atmosphere, hydrosphere, lithosphere, and biosphere',
    },
    {
        type: 'quiz',
        title: 'What is the main source of water for the hydrosphere?',
        options: [
            'Precipitation from the atmosphere',
            'Evaporation from the oceans',
            'Groundwater',
            'Runoff from the land',
        ],
        answer: 'Precipitation from the atmosphere',
    },
    {
        type: 'select',
        title: 'What is the primary function of the hydrosphere?',
        options: [
            "To regulate the Earth's climate",
            'To provide a habitat for living organisms',
            'To generate electricity',
            'To store carbon dioxide',
        ],
        answer: ["To regulate the Earth's climate"],
    },
    {
        type: 'quiz',
        title: 'What distinguishes surface water from groundwater?',
        options: [
            "Surface water is found on the Earth's surface, while groundwater is found underground.",
            'Surface water is always fresh, while groundwater can be saline.',
            'Surface water is easily accessible, while groundwater requires specialized techniques for access.',
            'Surface water is constantly replenished, while groundwater is a finite resource.',
        ],
        answer: "Surface water is found on the Earth's surface, while groundwater is found underground.",
    },
    {
        type: 'select',
        title: 'Which two factors primarily contribute to water pollution?',
        options: [
            'Industrial waste',
            'Agricultural runoff',
            'Urban development',
            'Natural disasters',
        ],
        answer: ['Industrial waste', 'Agricultural runoff'],
    },
    {
        type: 'select',
        title: 'What are the two most significant health risks associated with water pollution?',
        options: [
            'Waterborne diseases',
            'Respiratory problems',
            'Skin irritation',
            'Decreased cognitive function',
        ],
        answer: ['Waterborne diseases', 'Respiratory problems'],
    },
    {
        type: 'select',
        title: 'Which actions effectively prevent water pollution? (Choose two)',
        options: [
            'Treat wastewater before releasing it into the environment',
            'Reduce the use of pesticides and fertilizers',
            'Dispose of household chemicals properly',
            'Encourage deforestation',
        ],
        answer: [
            'Treat wastewater before releasing it into the environment',
            'Reduce the use of pesticides and fertilizers',
        ],
    },
    {
        type: 'select',
        title: 'Which two activities utilize the most water globally?',
        options: [
            'Drinking water',
            'Irrigation for agriculture',
            'Hydropower generation',
            'Recreation and tourism',
        ],
        answer: ['Drinking water', 'Irrigation for agriculture'],
    },
    {
        type: 'select',
        title: 'What are the two major challenges facing water resource management worldwide?',
        options: [
            'Increasing demand for water due to population growth',
            'Decreasing water availability due to climate change',
            'Water pollution from various sources',
            'Lack of advanced technology for water treatment',
        ],
        answer: [
            'Increasing demand for water due to population growth',
            'Decreasing water availability due to climate change',
        ],
    },
];

export default QUESTIONS;
