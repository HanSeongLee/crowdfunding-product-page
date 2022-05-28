import React from 'react';
import styles from './style.module.scss';
import SitemapContainer from '../../containers/SitemapContainer';
import cn from 'classnames';

interface IProps {
    open: boolean;
    toggleMenu: () => void;
};

const Menu: React.FC<IProps> = ({ open, toggleMenu }) => {
    return (
        <nav className={styles.menuNav}>
            <button className={styles.menuButton}
                    type={'button'}
                    onClick={toggleMenu}
            >
                <img src={!open ? '/icons/icon-hamburger.svg' : '/icons/icon-close-menu.svg'}
                     alt={'Menu'}
                />
            </button>

            <div className={cn(styles.menuContainerWrapper, {
                [styles.open]: open,
            })}>
                <SitemapContainer className={styles.menuContainer}/>
            </div>
        </nav>
    );
};

export default Menu;
