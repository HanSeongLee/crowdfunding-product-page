import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
};

const Modal: React.FC<IProps> = ({ open, className, children, ...props }) => {
    return (
        <div className={cn(styles.modal, className)}
             {...props}
        >
            <div className={styles.backdrop}></div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
