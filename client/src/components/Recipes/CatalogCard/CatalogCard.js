import { Link } from 'react-router-dom';

import styles from './CatalogCard.module.css';


export default function CatalogCard({
    recipe,
    chefName
}) {
    return (
        <div className="col-sm-6 col-lg-4 mb-3">
            <div className={`card h-100 ${styles['card-container']}`}>
                <img src={recipe.image} className="card-img-top" alt="..." />
                <div className={`${styles['card-body']} ${styles['post-info']} card-body`}>
                    <h5 className="card-title">{recipe.title}</h5>
                    {recipe.ownerId &&
                        <p className={styles['card-text']}>
                            <span className={styles['info-over']}>
                                <i className="far fa-user"></i>
                                By {chefName}
                            </span>
                          
                        </p>}
                    <Link to={`/recipes/${recipe._id}`} className={`${styles['btn']} ${styles['btn-primary']}`}>Details</Link>
                </div>
            </div>
        </div >
    );
}




