import { FC } from 'react';

type Props = {
    text: string
}
// comment
const Header: FC<Props> = ({text}) => {
    return (
        <header>
            hi
            {text}
        </header>
    );
};

export default Header;