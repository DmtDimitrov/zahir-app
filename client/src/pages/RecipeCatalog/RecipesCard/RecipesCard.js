import { NavLink } from 'react-router-dom';

// import styles from './SecondRecipesCard.module.css';


export default function CakeList({
    recipe
}) {
    return (
        <div className="col-sm-6 col-lg-4 mb-3">
            <div class="card h-100">
                <img src={recipe.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.description}</p>
                    <NavLink to={`/details/${recipe._id}`} className="btn btn-primary">Details</NavLink>
                </div>
            </div>
        </div >
    );
}



