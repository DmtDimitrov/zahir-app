import { Link } from 'react-router-dom';



export default function BestRecipesCard({
    recipe
}) {
    return (

        <div className="col">
            <div className="card h-100">
                <Link to={`/recipes/details/${recipe._id}`}>
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

