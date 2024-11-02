// src/components/ToastContext.js

import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        setToasts((prev) => [...prev, toast]);
        setTimeout(() => {
            removeToast(toast.id);
        }, 3000); // Auto-remove toast after 3 seconds
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
};

const ToastContainer = ({ toasts }) => (
    <div className="toast-container">
        {toasts.map((toast) => (
            <div key={toast.id} className={`toast ${toast.type}`}>
                {toast.message}
            </div>
        ))}
    </div>
);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
