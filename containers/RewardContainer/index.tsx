import React, {HTMLAttributes} from 'react';
import {IReward} from '../../types/reward';

const rewards: IReward[] = [
    {
        title: 'Bamboo Stand',
        description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
        price: 25,
        amount: 101,
    },
    {
        title: 'Black Edition Stand',
        description: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
        price: 75,
        amount: 64,
    },
    {
        title: 'Mahogany Special Edition',
        description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
        price: 200,
        amount: 0,
    },
];

interface IProps extends HTMLAttributes<HTMLUListElement> {
    children: (rewards: IReward[]) => React.ReactNode;
};

const RewardContainer: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <ul {...props}>
            {children(rewards)}
        </ul>
    );
};

export default RewardContainer;
