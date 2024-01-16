import { useState } from 'react';

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue); // This hook will handle the state of the modal (open or closed)

    const openModal = () => setIsOpen(true); // This function will be used to open the modal

    const closeModal = () => setIsOpen(false); // This function will be used to close the modal

  
    return [isOpen, openModal, closeModal]; // This hook returns an array with the state of the modal and the functions to open and close it
}

