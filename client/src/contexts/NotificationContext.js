import { createContext, useContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const types = {
    error: 'danger',
    warning: 'warning',
    info: 'info',
    success: 'success',
    light: 'light',
};

const initialNotificationState = {
    show: false,
    message: '',
    type: types.error,
    title:'',
};


export const NotificationProvider = ({
    children
}) => {
    const [notification, setNotification] = useState(initialNotificationState);

    const addNotification = useCallback((message, type = types.error, title) => {
        setNotification({ show: true, message, type, title });

        setTimeout(() => {
            setNotification(initialNotificationState)
        }, 4000);
    }, []);

    const hideNotification = useCallback(() => setNotification(initialNotificationState))

    return (
        <NotificationContext.Provider value={{ notification, addNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    )
};

export const useNotificationContext = () => {
    const state = useContext(NotificationContext);

    return state;
}
