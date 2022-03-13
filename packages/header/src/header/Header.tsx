import React, {FC} from 'react';

type Props = {
    text: string
}
// Comment
const Header: FC<Props> = ({text}) => {
    return (
        <header>
            {text}
        </header>
    );
};

export default Header;