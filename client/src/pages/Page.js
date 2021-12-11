import { useEffect } from 'react';

import Notification from '../components/Common/Notification';
import { useNotificationContext } from '../contexts/NotificationContext';

const Page = (props) => {
    const { notification } = useNotificationContext()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [notification]);

    return (
        <main>
            <Notification />
            {props.children}
        </main>
    );
};

export default Page;