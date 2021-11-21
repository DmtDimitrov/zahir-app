import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import './RecipeDetails.css';
import styles from './RecipeDetails.module.css';
import Subheader from '../../components/Subheader';
import Comments from '../../components/Comments';
import AddComment from '../../components/Comments/AddComment';
import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../components/CategoriesBar';

export default function RecipeDetails({
    match
}) {
    const [recipe, setRecipe] = useState({});

    const recipeId = match.params.recipeId;
    console.log(recipeId);

    useEffect(async () => {
        let recipeResult = await recipeService.getOne(recipeId);
        console.log(recipeResult);
        setRecipe(recipeResult);
    }, []);


    return (
        <>
            <Subheader
                title="Recipe Details"
            />

            <div className={`${styles['main-container']} ${styles['recipe-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">

                        <div className=" col-lg-8 " >

                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className={styles['recipe-post']}>
                                        <div> <img src={recipe.image} alt="" className={`${styles['recipe-image']} img-fluid`} /></div>
                                        <div className={styles['recipe-description']}>
                                            <div className="text-center">  <a href="#"> Shop </a>
                                                <h1>{recipe.title}</h1>
                                                <div className={styles['post-info']}> <p> <span className={styles['info-over']}>  <i className="far fa-user"></i> By Admin</span> <span className={styles['spc-line']}> |</span> <span className={styles['info-over']}> Dec 24,2016</span>
                                                    <span className={styles['spc-line']}> |</span> <span className={styles['info-over']}> <i className="far fa-heart"></i> 39 Likes </span> <span className={styles['spc-line']}> |</span>
                                                    <span className={styles['info-over']}> <i className="far fa-comment"></i> 55 comments </span> </p> </div>
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
                                                    <button>About us</button>
                                                    <button>Services</button>
                                                    <button>Gallery</button>
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


                            <Comments />

                            <AddComment />



                        </div>

                        <div className=" col-lg-4 side-bar-colon" >

                            <SearchBar />

                            <CategoriesBar />

                           
                            <div className="row blog-row-padd">
                                <div className="col-12 side-bar-bg">
                                    <div className="our-header text-center">
                                        <span>recent post</span>
                                        <div className="text-center">
                                            <hr /><i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i><hr />
                                        </div>
                                    </div>
                                    <div className=" row ltl-blog">
                                        <div className="col-4"> <img src="blog/recent-post-1.jpg" alt="" className="recent-img img-fluid" /></div>
                                        <div className="col-8 max-award">
                                            <p> Guys like us we had it made.</p>
                                            <i className="far fa-heart blog-icon"></i> <span> 45 </span>  <span className="blog-vl"> | </span>
                                            <i className="far fa-comment blog-icon"></i><span> 34 </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row ltl-blog">
                                        <div className="col-4"> <img src="blog/recent-post-2.jpg" alt="" className="recent-img img-fluid" /></div>
                                        <div className="col-8 max-award">
                                            <p> Everybody pulled his weight.</p>
                                            <i className="far fa-heart blog-icon"></i> <span> 79 </span>  <span className="blog-vl"> | </span>
                                            <i className="far fa-comment blog-icon"></i><span> 53 </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="  row ltl-blog">
                                        <div className="col-4"> <img src="blog/recent-post-3.jpg" alt="" className="recent-img img-fluid" /></div>
                                        <div className="col-8 max-award">
                                            <p> Brady who was busy with <br />three boys.</p>
                                            <i className="far fa-heart blog-icon"></i> <span> 79 </span>  <span className="blog-vl"> | </span>
                                            <i className="far fa-comment blog-icon"></i><span> 53 </span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            
                           
                            <div className="row blog-row-padd">
                                <div className="col-12 side-bar-bg">
                                    <div className="our-header text-center">
                                        <span>popular tags</span>
                                        <div className="text-center">
                                            <hr /><i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> <hr />
                                        </div>
                                    </div>
                                    <div className="popular-link">
                                        <button >About Us</button>
                                        <button> Services </button>
                                        <button>Gallery </button>
                                        <button>Products </button>
                                        <button>Business Cards</button>
                                        <button>Brocher</button>
                                        <button>Post Cards</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}