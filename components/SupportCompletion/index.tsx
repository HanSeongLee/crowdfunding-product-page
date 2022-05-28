import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Button from '../Button';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onConfirm: () => void;
};

const SupportCompletion: React.FC<IProps> = ({ onConfirm, className, ...props }) => {
    return (
        <div className={cn(styles.supportCompletion, className)}
             {...props}
        >
            <img className={styles.icon}
                 src={'/icons/icon-check.svg'}
                 alt={''}
            />

            <h2 className={styles.title}>
                Thanks for your support!
            </h2>
            <p className={styles.description}>
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will
                get an email once our campaign is completed.
            </p>

            <Button className={styles.button}
                    onClick={onConfirm}
            >
                Got it!
            </Button>
        </div>
    );
};

export default SupportCompletion;
