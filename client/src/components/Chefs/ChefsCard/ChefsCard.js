import { Link } from 'react-router-dom';

import styles from './ChefsCard.module.css';


export default function ChefsCard({
    user,
}) {

    return (
        <div className="col-sm-6 col-lg-4 mb-3">
            <div className={`card h-100 ${styles['card-container']}`}>
                <Link to={`/chefs/${user?._id}`}>
                    <img src={user?.image ? user.image : "zahir/default-profile.jpg"} className="card-img-top" alt="..." />
                </Link>
                <div className={`${styles['card-body']} ${styles['post-info']} card-body`}>
                    <h5 className="card-title">{user && `${user.firstName} ${user.lastName}`}</h5>
                    {/* {user?.recipes &&
                        <p className={styles['card-text']}>
                            <span className={styles['info-over']}>
                                <i className="far fa-user"></i>
                                By {`${recipe.ownerId.firstName} ${recipe.ownerId.lastName}`}
                            </span>
                          
                        </p>} */}
                </div>
            </div>
        </div >
    );
}




