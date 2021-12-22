import { useEffect } from 'react';

import styles from './Page.module.css';
import Notification from '../components/Common/Notification';
import { useNotificationContext } from '../contexts/NotificationContext';

const Page = (props) => {
    const { notification } = useNotificationContext()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, [notification]);

    return (
        <main className={styles['page-container']}>
            <Notification />
            {props.children}
        </main>
    );
};

export default Page;