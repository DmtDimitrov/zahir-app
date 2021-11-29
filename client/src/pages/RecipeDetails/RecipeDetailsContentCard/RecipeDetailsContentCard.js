// import { useEffect } from 'react';
import styles from './RecipeDetailsContentCard.module.css';
import { DATE_OPTIONS } from '../../../constants';

export default function RecipeDetailsContentCard(
    recipe
) {

    let date = new Date(recipe.createdAt).toLocaleDateString('en-US', DATE_OPTIONS);

    return (
        <div className="row">
            <div className="col-md-12 ">
                <div className={styles['recipe-post']}>
                    <div> <img src={recipe.image} alt="" className={`${styles['recipe-image']} img-fluid`} /></div>
                    <div className={styles['recipe-description']}>
                        <div className="text-center">
                            <div className="row">
                                <div className={`col-md-6 ${styles['btn-icon']}`}>
                                    <button>Cook for</button>

                                </div>
                                <div className=" col-md-6 ">
                                    <input type="text" name="Serving" placeholder="Serving" className={styles['sm-input']} />
                                </div>

                            </div>

                            <h1>{recipe.title}</h1>
                            <div className={styles['post-info']} >
                                <p>
                                    <span className={styles['info-over']}>
                                        <i className="far fa-user"></i>
                                        By {`${recipe.author.firstName} ${recipe.author.lastName}`}
                                    </span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> {date}</span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-heart"></i> 39 Likes </span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-comment"></i> 55 comments </span>
                                </p>
                            </div>
                        </div>
                        <div >
                            <h5>Description:</h5>
                            <p>
                                {recipe.description}
                            </p>
                        </div>

                        <div className={styles['explore']}>
                            <div >

                                <h5>Ingredients:</h5>
                                <ul className="list-group">
                                    {recipe.ingredients.map(x => (

                                        <li className="list-group-item" key={x._id}>{x.quantity} {x.unit} {x.name}</li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                        <div>
                            <h5>Method:</h5>
                            <p>
                                {recipe.method}
                            </p>
                        </div>

                        <div className="row">
                            <div className={`col-md-8 ${styles['btn-icon']}`}>
                                <button>Rate</button>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                            <div className=" col-md-4 ">
                                <div className={`text-right ${styles['icon-btn']}`}>

                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                    <i className="fab fa-tumblr"></i>
                                </div>
                            </div>

                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}