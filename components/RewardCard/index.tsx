import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from '../Button';
import { IReward } from '../../types/reward';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    reward: IReward;
    onRewardSelect: (reward: IReward) => void;
};

const RewardCard: React.FC<IProps> = ({ onRewardSelect, reward, className, ...props }) => {
    const { title, description, price, amount } = reward;
    return (
        <div className={cn(styles.rewardCard, {
            [styles.disabled]: amount === 0,
        }, className)}
             {...props}
        >
            <div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.price}>
                    Pledge ${price?.toLocaleString()} or more
                </div>
            </div>
            <p className={styles.description}>
                {description}
            </p>

            <div className={styles.amount}>
                <strong>
                    {amount}
                </strong>
                left
            </div>

            <Button onClick={_ => onRewardSelect(reward)}
                    disabled={amount === 0}
            >
                {amount > 0 ? 'Select Reward' : 'Out of Stock'}
            </Button>
        </div>
    );
};

export default RewardCard;
