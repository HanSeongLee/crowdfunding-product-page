import React, {useCallback, useState} from 'react';
import Modal from '../../components/Modal';

const useModal = () => {
    const [open, setOpen] = useState(false);

    const openModal = useCallback(() => {
        setOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);

    return {
        open,
        openModal,
        closeModal,
        Modal: Modal,
    };
};

export default useModal;
