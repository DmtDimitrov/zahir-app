import { useEffect, useState } from 'react';


import './RecipeCatalog.css';
import Subheader from '../../components/Subheader';
import Pagination from '../../components/Pagination';

import RecipesCard from './RecipesCard';
import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../components/CategoriesBar';
import * as recipeService from '../../services/recipeService';


export default function RecipeCatalog({
    navigationHandler
}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result)
            })
    }, []);

   

    return (
        <>
            <Subheader
                title="Recipes"
            />


            <div className="main-container blog-container">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-lg-8 " >
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {recipes.length > 0
                                    ? recipes.map(x => <RecipesCard key={x._id} recipe={x} />)
                                    : <h3 className="no-articles">No recipes yet</h3>
                                }

                            </div>
                        </div>

                        <div className=" col-lg-4 side-bar-colon" >

                            <SearchBar/>

                            <CategoriesBar/>

                            

                            <div className="row blog-row-padd">
                                <div className="col-12 side-bar-bg">
                                    <div className="recipes-our-header text-center">
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
                                    <div className="recipes-our-header text-center">
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

            <Pagination />

        </>

    );
}