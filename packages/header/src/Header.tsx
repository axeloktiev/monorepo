import React, {FC} from 'react';

type Props = {
    text: string
}

export const Header: FC<Props> = ({
    text
                           }) => {
    return (
        <div>
            {text}
        </div>
    );
};