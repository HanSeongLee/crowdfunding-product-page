import React, {useCallback} from 'react';
import ProjectView from '../../components/ProjectView';
import useModal from '../../lib/useModal';
import BackProject from '../../components/BackProject';
import Container from '../../components/Container';
import SupportCompletion from '../../components/SupportCompletion';

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
            <ProjectView onBackProjectClick={onBackProjectClick}
                         onRewardSelect={onRewardSelect}
            />
            <Modal open={backProjectOpen}
                   onClose={closeModalBackProject}
            >
                <Container>
                    {backProjectOpen &&
                        <BackProject onContinue={onContinue}
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
