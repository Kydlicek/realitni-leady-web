// src/components/hooks/use-toast.js

import { useToast as useToastContext } from '../ToastContext';

const toast = () => {
    const { addToast } = useToastContext();

    const toast = (message, type = 'info') => {
        const id = Math.random().toString(36).substring(2, 15);
        addToast({ id, message, type });
    };

    return { toast }; // Returning an object with the toast function
};

export default toast; // Exporting useToast as default
