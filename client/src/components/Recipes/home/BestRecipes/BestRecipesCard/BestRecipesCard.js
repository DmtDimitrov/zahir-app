import { Link } from 'react-router-dom';

import styles from './BestRecipesCard.module.css';

export default function BestRecipesCard({
    recipe
}) {
    return (

        <div className="col">
            <div className={`card h-100 ${styles['card-container']}`}>
                <Link to={`/recipes/${recipe._id}`}>
                    <img src={recipe.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
        </div>

    );
}

