import React, {HTMLAttributes, useCallback, useState} from 'react';
import RewardOption from '../../components/RewardOption';
import RewardContainer from '../RewardContainer';
import {IReward} from '../../types/reward';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    onContinue: (reward: IReward, pledge?: number) => void;
};

const RewardOptionContainer: React.FC<IProps> = ({ onContinue, ...props }) => {
    const [selected, setSelected] = useState();

    const onSelected = useCallback((index) => {
        setSelected(index);
    }, []);

    return (
        <RewardContainer {...props}>
            {(rewards) =>
                (
                    <>
                        <li>
                            <RewardOption reward={{
                                title: 'Pledge with no reward',
                                description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
                                price: 0,
                                amount: -1,
                            }}
                                          active={selected === 999}
                                          onClick={_ => onSelected(999)}
                                          onContinue={onContinue}
                            />
                        </li>
                        {rewards.map((reward, index) => (
                            <li key={index}>
                                <RewardOption reward={reward}
                                              active={selected === index}
                                              onClick={_ => onSelected(index)}
                                              onContinue={onContinue}
                                />
                            </li>
                        ))}
                    </>
                )}
        </RewardContainer>
    );
};

export default RewardOptionContainer;
