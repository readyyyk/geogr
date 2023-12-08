import {FC, ReactNode, MouseEvent} from 'react';
import {twMerge} from 'tailwind-merge';

interface Props {
    children: ReactNode;
    backdropClassName?: string;
    backdropOnClick?: (e: MouseEvent<HTMLDivElement, MouseEvent>) => any;
    className?: string;
}

const CenterLayout: FC<Props> = ({
    children,
    backdropClassName,
    backdropOnClick,
}) => {
    return (
        <div
            onClick={void backdropOnClick}
            className={twMerge(
                'w-100 min-h-screen flex justify-center items-center p-5',
                backdropClassName,
            )}
            data-backdrop={true}
        >
            {children}
        </div>
    );
};

export default CenterLayout;
