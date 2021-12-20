import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useNotificationContext } from '../../../contexts/NotificationContext';

import './Notification.css';


const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <ToastContainer className="p-3" position="middle-end">
            <Toast className="d-inline-block m-1" bg={notification.type} onClose={hideNotification}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">{notification.title}</strong>
                    <small>{ }</small>
                </Toast.Header>
                <Toast.Body >
                    {notification.message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default Notification;