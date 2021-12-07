import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './RecipeDetailsContentCard.module.css';
import { DATE_OPTIONS } from '../../../constants';
import { AuthContext } from '../../../contexts/AuthContext';
import { RecipeDetailsContext } from '../../../contexts/RecipeDetailsContext';
import DeleteModal from '../Modal';

export default function RecipeDetailsContentCard() {
    const { user } = useContext(AuthContext)
    const { recipe } = useContext(RecipeDetailsContext);
    let date = new Date(recipe?.createdAt).toLocaleDateString('en-US', DATE_OPTIONS);


    

    const ownerButtons = (
        <>
            <NavLink to="/edit" className={styles['btn-icon-a']}> Edit</NavLink>
            <DeleteModal/>
            <button>Cook</button>
        </>
    );

    const userButtons = (
        <button>Like</button>
    );
    return (

        <div className="row">
            <div className="col-md-12 ">
                <div className={styles['recipe-post']}>
                    <div> <img src={recipe?.image} alt="" className={`${styles['recipe-image']} img-fluid`} /></div>
                    <div className={styles['recipe-description']}>
                        <div className="text-center">
                            <div className="row">

                                <div className={`col-md-12 ${styles['btn-icon']}`}>
                                    {user?._id
                                        ? user._id === recipe?.ownerId._id
                                            ? ownerButtons
                                            : userButtons
                                        : ""
                                    }
                                </div>
                            </div>

                            {/* <h1>{recipe.title}</h1> */}
                            <div className={styles['post-info']} >
                                <p>
                                    <span className={styles['info-over']}>
                                        <i className="far fa-user"></i>
                                        By {recipe?.ownerId.firstName}
                                    </span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> {date}</span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-heart"></i> {recipe?.likes.length} Likes </span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-comment"></i> 55 comments </span>
                                </p>
                            </div>

                        </div>
                        <div >
                            <h5>Description:</h5>
                            <p>
                                {recipe?.description}
                            </p>
                        </div>

                        <div className={styles['explore']}>
                            <div >

                                <h5>Ingredients:</h5>
                                <ul className="list-group">
                                    {recipe?.ingredients.map(x => (

                                        <li className="list-group-item" key={x._id}>{x.quantity} {x.unit} {x.name}</li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                        <div>
                            <h5>Method:</h5>
                            <p>
                                {recipe?.method}
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}