import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Button from '../Button';
import cn from 'classnames';
import RewardContainer from '../../containers/RewardContainer';
import RewardCard from '../RewardCard';
import {IReward} from '../../types/reward';
import BookmarkButton from '../BookmarkButton';

interface IProps {
    onBackProjectClick: () => void;
    onRewardSelect: (reward: IReward) => void;
};

const ProjectView: React.FC<IProps> = ({ onBackProjectClick, onRewardSelect }) => {
    return (
        <section className={styles.projectView}>
            <img className={styles.topBanner}
                 src={'/img/image-hero-mobile.jpg'}
                 alt={''}
            />
            <Container className={styles.container}>
                <div className={styles.box}>
                    <img className={styles.projectLogo}
                         src={'/img/logo-mastercraft.svg'}
                         alt={'logo'}
                    />

                    <h2 className={styles.title}>
                        {`Mastercraft Bamboo \nMonitor Riser`}
                    </h2>
                    <p className={styles.description}>
                        A beautifully handcrafted monitor stand to reduce neck and eye strain.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Button onClick={onBackProjectClick}>
                            Back this project
                        </Button>
                        <BookmarkButton />
                    </div>
                </div>

                <div className={styles.box}>
                    <ul className={styles.indicatorContainer}>
                        <li className={styles.indicator}>
                            <div className={styles.title}>
                                $89,914
                            </div>
                            <div className={styles.description}>
                                of $100,000 backed
                            </div>
                        </li>
                        <li className={styles.indicator}>
                            <div className={styles.title}>
                                5,007
                            </div>
                            <div className={styles.description}>
                                total backers
                            </div>
                        </li>
                        <li className={styles.indicator}>
                            <div className={styles.title}>
                                56
                            </div>
                            <div className={styles.description}>
                                days left
                            </div>
                        </li>
                    </ul>
                    <div className={styles.progress}></div>
                </div>

                <div className={cn(styles.box, styles.projectDetails)}>
                    <div className={styles.title}>
                        About this project
                    </div>
                    <p className={styles.description}>
                        {`
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.\n
                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                        `}
                    </p>

                    <RewardContainer className={styles.rewardContainer}>
                        {(rewards) =>
                            rewards?.map((props, index) => (
                                <li key={index}>
                                    <RewardCard reward={props}
                                                onRewardSelect={onRewardSelect}
                                    />
                                </li>
                            ))
                        }
                    </RewardContainer>
                </div>
            </Container>
        </section>
    );
};

export default ProjectView;
