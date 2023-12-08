import CenterLayout from '@/components/CenterLayout.tsx';
import SelectQuestion from '@/components/SelectQuestion.tsx';
import QuizQuestion from '@/components/QuizQuestion.tsx';

import data from './assets/QUESTIONS.ts';

const App = () => {
    return (
        <CenterLayout>
            {/*<QuizQuestion*/}
            {/*    num={1}*/}
            {/*    title={'Какой сейчас год?'}*/}
            {/*    options={['2020', '2021', '2022', '2023']}*/}
            {/*    assets={[*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2020/128x128',*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2021/128x128',*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2022/128x128',*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2023/128x128',*/}
            {/*    ]}*/}
            {/*    answer={'2023'}*/}
            {/*    type={'quiz'}*/}
            {/*/>*/}
            {/*<SelectQuestion*/}
            {/*    num={1}*/}
            {/*    title={'Какой сейчас год?'}*/}
            {/*    options={['2020', '2021', '2022', '2023']}*/}
            {/*    assets={[*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2020/128x128',*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2021/128x128',*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2022/128x128',*/}
            {/*        'https://r-randimg-py.fly.dev/picsum/2023/128x128',*/}
            {/*    ]}*/}
            {/*    answer={['2023']}*/}
            {/*    type={'select'}*/}
            {/*/>*/}
            {data[0].type === 'quiz' ? (
                <QuizQuestion num={0 + 1} {...data[0]} />
            ) : (
                <SelectQuestion num={0 + 1} {...data[0]} />
            )}
        </CenterLayout>
    );
};

export default App;
