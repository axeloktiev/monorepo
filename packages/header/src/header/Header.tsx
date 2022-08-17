import { FC } from 'react';

type Props = {
    text: string
}
// comment
const Header: FC<Props> = ({text}) => {
    return (
        <header>
            {text}
        </header>
    );
};

export default Header;