import React, {HTMLAttributes, useState} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import cn from 'classnames';
import Logo from '../Logo';
import Menu from '../Menu';

const Header: React.FC<HTMLAttributes<HTMLHeadElement>> = ({ className, ...props }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className={cn(styles.header, {
            [styles.openMenu]: openMenu,
        }, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo />
                <Menu open={openMenu}
                      toggleMenu={() => setOpenMenu(!openMenu)}
                />
            </Container>
        </header>
    );
};

export default Header;
