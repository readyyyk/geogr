import {AnswersContext} from './AnswersContext.tsx';
import {AnswersProvider} from '@/AnswersContext.tsx';
import CenterLayout from '@/components/CenterLayout.tsx';
import {Button} from '@/components/ui/button.tsx';
import {useContext, useState} from 'react';
import {AnswersContextType} from '@/types/answers.ts';
import AllMode from '@/AllMode.tsx';
import CaptainMode from '@/CaptainMode.tsx';

const Application = () => {
    const [page, setPage] = useState<'all' | 'captain' | 'intro'>('intro');
    const {clearAnswers} = useContext(AnswersContext) as AnswersContextType;
    const handleAll = () => {
        clearAnswers();
        setPage('all');
    };
    const handleCaptains = () => {
        setPage('captain');
    };
    return (
        <CenterLayout>
            {page === 'intro' ? (
                <div className={'flex flex-col items-center gap-4'}>
                    <Button variant={'default'} size={'xl'} onClick={handleAll}>
                        Играют все!
                    </Button>
                    <Button
                        variant={'outline'}
                        size={'xl'}
                        onClick={handleCaptains}
                    >
                        Капитаны доигрывают!
                    </Button>
                </div>
            ) : page === 'all' ? (
                <AllMode back={() => setPage('intro')} />
            ) : (
                <CaptainMode back={() => setPage('intro')} />
            )}
        </CenterLayout>
    );
};

const App = () => {
    return (
        <AnswersProvider>
            <Application />
        </AnswersProvider>
    );
};

export default App;
