import { useEffect } from 'react';

import styles from './Page.module.css';
import Notification from '../components/Common/Notification';
import { useNotificationContext } from '../contexts/NotificationContext';

const Page = (props) => {
    const { notification } = useNotificationContext()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [notification]);

    return (
        <main className={styles['page-container']}>
            <Notification />
            {props.children}
        </main>
    );
};

export default Page;