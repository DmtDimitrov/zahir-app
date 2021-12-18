import styles from './Chefs.module.css';

import Page from '../Page';
import Subheader from '../../components/Subheader';
import ChefsCard from './ChefsCard';
import { useUsersState } from '../../hooks/useUsersState';

export default function Chefs() {
    const [users, setUsers] = useUsersState();

    console.log('users');
    console.log(users);
    return (
        <Page>
            <Subheader
                title="Chefs"
            />

            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className="col-lg-12 " >
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {users && users.map(x => <ChefsCard key={x._id} user={x} />)}
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        

        </Page>

    );
}