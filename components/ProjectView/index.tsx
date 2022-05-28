import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Button from '../Button';
import cn from 'classnames';
import RewardCard from '../RewardCard';
import {IReward} from '../../types/reward';
import BookmarkButton from '../BookmarkButton';
import {IProject} from '../../types/project';

interface IProps {
    project: IProject;
    onBackProjectClick: () => void;
    onRewardSelect: (reward: IReward) => void;
};

const ProjectView: React.FC<IProps> = ({ project, onBackProjectClick, onRewardSelect }) => {
    const {
        banner: {
            mobile,
            desktop,
        },
        logo, title, description, backed,
        totalBacked, totalBackers, duration, content,
        rewards,
    } = project;

    return (
        <section className={styles.projectView}>
            <picture>
                <source srcSet={mobile}
                        media={'(max-width: 992px)'}
                />
                <source srcSet={desktop}
                        media={'(min-width: 992px)'}
                />

                <img className={styles.topBanner}
                     src={desktop}
                     alt={''}
                />
            </picture>
            <Container className={styles.container}>
                <div className={styles.box}>
                    <img className={styles.projectLogo}
                         src={logo}
                         alt={'logo'}
                    />

                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <div className={styles.buttonContainer}>
                        <Button onClick={onBackProjectClick}>
                            Back this project
                        </Button>
                        <BookmarkButton/>
                    </div>
                </div>

                <div className={styles.box}>
                    <ul className={styles.indicatorContainer}>
                        <li className={styles.indicator}>
                            <div className={styles.title}>
                                ${backed?.toLocaleString()}
                            </div>
                            <div className={styles.description}>
                                of ${totalBacked?.toLocaleString()} backed
                            </div>
                        </li>
                        <li className={styles.indicator}>
                            <div className={styles.title}>
                                {totalBackers?.toLocaleString()}
                            </div>
                            <div className={styles.description}>
                                total backers
                            </div>
                        </li>
                        <li className={styles.indicator}>
                            <div className={styles.title}>
                                {duration?.toLocaleString()}
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
                        {content}
                    </p>

                    <ul className={styles.rewardContainer}>
                        {rewards?.map((props, index) => (
                            <li key={index}>
                                <RewardCard reward={props}
                                            onRewardSelect={onRewardSelect}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default ProjectView;
