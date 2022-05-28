import {IReward} from './reward';

export declare interface IProject {
    banner: {
        mobile: string;
        desktop: string;
    };
    logo: string;
    title: string;
    description: string;
    backed: number;
    totalBacked: number;
    totalBackers: number;
    duration: number;
    content: string;
    rewards: IReward[];
};
