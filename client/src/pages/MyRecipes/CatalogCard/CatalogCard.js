import { NavLink } from 'react-router-dom';

import styles from './CatalogCard.module.css';


export default function RecipesCard({
    recipe,
}) {
    // console.log('recipe.author');
    // console.log(recipe.author);
    console.log('recipe');
    console.log(recipe);
    
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
                                By {`${recipe.ownerId.firstName} ${recipe.ownerId.lastName}`}
                            </span>
                          
                        </p>}
                    <NavLink to={`/details/${recipe._id}`} className={`${styles['btn']} ${styles['btn-primary']}`}>Details</NavLink>
                </div>
            </div>
        </div >
    );
}




