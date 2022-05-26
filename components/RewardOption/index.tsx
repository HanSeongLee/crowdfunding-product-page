import React, {HTMLAttributes, useState} from 'react';
import styles from './style.module.scss';
import {IReward} from '../../types/reward';
import cn from 'classnames';
import Button from '../Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    reward: IReward;
    active?: boolean;
    onContinue: (reward: IReward, pledge?: number) => void;
};

const RewardOption: React.FC<IProps> = ({
                                            reward, active, onClick, onContinue,
                                            className, ...props
                                        }) => {
    const {title, description, amount, price} = reward;
    const [pledge, setPledge] = useState(price);
    const disabled = amount === 0;

    return (
        <div className={cn(styles.rewardOption, {
            [styles.active]: active,
            [styles.disabled]: disabled,
        }, className)}
             {...props}
             onClick={!disabled ? onClick : undefined}
        >
            <div className={styles.body}>
                <div className={styles.head}>
                    <button className={styles.optionButton}
                            aria-label={title}
                    >
                    </button>
                    <div>
                        <div className={styles.title}>
                            {title}
                        </div>
                        {price > 0 && (
                            <div className={styles.price}>
                                Pledge ${price?.toLocaleString()} or more
                            </div>
                        )}
                    </div>
                </div>
                <p className={styles.description}>
                    {description}
                </p>

                {amount >= 0 && (
                    <div className={styles.amount}>
                        <strong>
                            {amount}
                        </strong>
                        left
                    </div>
                )}
            </div>
            {active && (
                <div className={styles.footer}>
                    {price > 0 && (
                        <p className={styles.description}>
                            Enter your pledge
                        </p>
                    )}
                    <div className={styles.container}>
                        {price > 0 && (
                            <div className={styles.pledgeInputWrapper}>
                                <input className={styles.pledgeInput}
                                       type={'number'}
                                       min={price}
                                       defaultValue={price}
                                       value={pledge}
                                       onChange={e => setPledge(+e.target.value)}
                                />
                            </div>
                        )}
                        <Button className={styles.continueButton}
                                onClick={() => onContinue(reward, pledge)}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RewardOption;
