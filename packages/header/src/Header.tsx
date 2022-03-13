import React, {FC} from 'react';

type Props = {
    text: string
}

const Header: FC<Props> = ({text}) => {
    return (
        <header>
            {text}
        </header>
    );
};

export default Header