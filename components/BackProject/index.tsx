import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import CloseIcon from '/public/icons/icon-close-menu.svg';
import RewardOptionContainer from '../../containers/RewardOptionContainer';
import {IReward} from '../../types/reward';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    rewards: IReward[];
    onContinue: (reward: IReward, pledge?: number) => void;
    onClose: () => void;
};

const BackProject: React.FC<IProps> = ({ rewards, onContinue, onClose, ...props }) => {
    return (
        <div className={styles.backProject}
             {...props}
        >
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>
                    Back this project
                </h2>
                <button className={styles.closeButton}
                        aria-label={'close'}
                        onClick={onClose}
                >
                    <CloseIcon/>
                </button>
            </div>
            <p className={styles.description}>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>

            <RewardOptionContainer className={styles.rewardOptionContainer}
                                   rewards={rewards}
                                   onContinue={onContinue}
            />
        </div>
    );
};

export default BackProject;
