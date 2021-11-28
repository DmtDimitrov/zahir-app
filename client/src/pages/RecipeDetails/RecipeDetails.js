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
import PopularTags from '../../components/PopularTags';
import RecipeDetailsContentCard from './RecipeDetailsContentCard'


export default function RecipeDetails({
    match
}) {

    const [recipe, setRecipe] = useState({
      
    });

    const recipeId = match.params.recipeId;

    useEffect(async () => {
        let recipeResult = await recipeService.getOne(recipeId);

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

                        <div className=" col-lg-12 " >



                            <PopularTags
                                title="Categories"
                            />

                        </div>



                        <div className=" col-lg-8 " >


                            <RecipeDetailsContentCard {...recipe} />

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


                            <PopularTags
                                title="Popular Tags"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}