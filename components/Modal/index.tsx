import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
};

const Modal: React.FC<IProps> = ({
                                     open, onClose, className, children,
                                     ...props
                                 }) => {
    return (
        <div className={cn(styles.modal, {
            [styles.open]: open,
        }, className)}
             {...props}
             onClick={onClose}
        >
            <div className={styles.backdrop}></div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
