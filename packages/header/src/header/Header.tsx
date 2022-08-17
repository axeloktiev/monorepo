import { FC } from 'react';

type Props = {
    text: string
}
// comment
const Header: FC<Props> = ({text}) => {
    return (
        <header>
            {text}
            hi
        </header>
    );
};

export default Header;