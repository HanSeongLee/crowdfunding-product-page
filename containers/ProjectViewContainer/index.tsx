import React, {useCallback} from 'react';
import ProjectView from '../../components/ProjectView';
import useModal from '../../lib/useModal';
import BackProject from '../../components/BackProject';
import Container from '../../components/Container';
import SupportCompletion from '../../components/SupportCompletion';

const project = {
    banner: {
        mobile: '/img/image-hero-mobile.jpg',
        desktop: '/img/image-hero-desktop.jpg',
    },
    logo: '/img/logo-mastercraft.svg',
    title: `Mastercraft Bamboo \nMonitor Riser`,
    description: 'A beautifully handcrafted monitor stand to reduce neck and eye strain.',
    backed: 89914,
    totalBacked: 100000,
    totalBackers: 5007,
    duration: 56,
    content: 'The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.\n\n                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.',
    rewards: [
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
    ],
};

const ProjectViewContainer: React.FC = () => {
    const {
        open: backProjectOpen,
        openModal: openModalBackProject,
        closeModal: closeModalBackProject,
        Modal
    } = useModal();
    const {
        open: supportCompletionOpen,
        openModal: openModalSupportCompletion,
        closeModal: closeModalSupportCompletion,
    } = useModal();

    const onBackProjectClick = useCallback(() => {
        openModalBackProject();
    }, []);

    const onRewardSelect = useCallback((reward) => {
        openModalBackProject();
    }, []);

    const onContinue = useCallback((reward, pledge) => {
        closeModalBackProject();
        openModalSupportCompletion();
    }, []);

    const onConfirm = useCallback(() => {
        closeModalSupportCompletion();
    }, []);

    return (
        <div>
            <ProjectView project={project}
                         onBackProjectClick={onBackProjectClick}
                         onRewardSelect={onRewardSelect}
            />
            <Modal open={backProjectOpen}
                   onClose={closeModalBackProject}
            >
                <Container>
                    {backProjectOpen &&
                        <BackProject rewards={project?.rewards}
                                     onContinue={onContinue}
                                     onClose={closeModalBackProject}
                                     onClick={e => e.stopPropagation()}
                        />
                    }
                </Container>
            </Modal>
            <Modal open={supportCompletionOpen}
                   onClose={closeModalSupportCompletion}
            >
                <Container>
                    <SupportCompletion onConfirm={onConfirm}
                                       onClick={e => e.stopPropagation()}
                    />
                </Container>
            </Modal>
        </div>
    );
};

export default ProjectViewContainer;
