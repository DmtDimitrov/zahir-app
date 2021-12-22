import { Link } from 'react-router-dom';

import styles from './ChefsCard.module.css';


export default function ChefsCard({
    user,
}) {

    return (
        <div className="col-sm-6 col-lg-4 mb-3">
            <div className={`card h-100 ${styles['card-container']}`}>
                <Link to={`/chefs/${user?._id}`}>
                    <img src={user?.image ? user.image : "zahir/default-profile.jpg"} className={`card-img-top ${styles['card-img']}`} alt="..." />
                </Link>
                <div className={`${styles['card-body']} ${styles['post-info']} card-body`}>
                    <h5 className="card-title">{user && `${user.firstName} ${user.lastName}`}</h5>
                    <Link to={`/chefs/${user?._id}`} className={`${styles['btn']} ${styles['btn-primary']}`}>View recipes</Link>
                </div>
            </div>
        </div >
    );
}




