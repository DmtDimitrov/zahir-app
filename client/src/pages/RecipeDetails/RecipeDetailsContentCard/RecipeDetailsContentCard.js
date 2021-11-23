import { useState, useEffect } from 'react';
import styles from './RecipeDetailsContentCard.module.css';
import { DATE_OPTIONS } from '../../../constants';


export default function RecipeDetailsContentCard(
    recipe

) {
   
    let date = new Date(recipe.createdAt).toLocaleDateString('en-US', DATE_OPTIONS);

    let authorFullName = `${recipe.author.firstName} ${recipe.author.lastName}`;
  
    return (
        <div className="row">
            <div className="col-md-12 ">
                <div className={styles['recipe-post']}>
                    <div> <img src={recipe.image} alt="" className={`${styles['recipe-image']} img-fluid`} /></div>
                    <div className={styles['recipe-description']}>
                        <div className="text-center">  <a href="#"> Shop </a>
                            <h1>{recipe.title}</h1>
                            <div className={styles['post-info']}>
                                <p>
                                    <span className={styles['info-over']}>  <i className="far fa-user"></i> By { authorFullName}</span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> {date}</span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-heart"></i> 39 Likes </span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-comment"></i> 55 comments </span>
                                </p>
                            </div>
                        </div>

                        <p> {recipe.description}</p>


                        <div className={styles['explore']}>
                            <p> Explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.
                            </p>
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <p>
                            Sometimes you want to go where everybody knows your name. And they're always glad you came. Makin' your way in the world today takes everything you've got.
                            Takin' a break from all your worries sure would help a lot. Makin' your way in the world today takes everything you've got.
                        </p>
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