import React, {FC} from 'react';

type Props = {
    text: string
}

export const Header: FC<Props> = ({text}) => {
    return (
        <header>
            {text}
        </header>
    );
};