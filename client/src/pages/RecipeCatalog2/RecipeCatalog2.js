import { useEffect, useState } from 'react';

import './RecipeCatalog2.css';
import Subheader from '../../components/Subheader';
import Pagination from '../../components/Pagination';
import RecipeCard2 from './components/RecipeCard2';
import * as recipeService from '../../services/recipeService';


export default function RecipeCatalog2({
    navigationHandler
}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result)
            })
    }, []);

    console.log(recipes);

    


    return (
        <>
            <Subheader
                title="Recipes"
            />


            <div className="main-container blog-container">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-lg-8 " >

                            {recipes.length > 0
                                ? recipes.map(x => <RecipeCard2 key={x._id} recipe={x} navigationHandler={navigationHandler} />)
                                : <h3 className="no-articles">No recipes yet</h3>
                            }

                            
                           

                           

                        </div>

                        <div className=" col-lg-4 side-bar-colon" >
                            <div className="row blog-row-padd">
                                <div className="col-12  side-bar-bg">
                                    <div className="recipes-our-header text-center">
                                        <span>Search</span>
                                        <div className="text-center">
                                            <hr /> <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> <hr />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <input className="form-control " type="search" placeholder="Type And Hit Enter" aria-label="Search" />
                                        <div className="input-group-append">
                                            <span className="input-group-text search-loop" id="basic-text1"><i className="fas fa-search text-white " aria-hidden="true"></i></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row blog-row-padd">
                                <div className="col-12  side-bar-bg">
                                    <div className="recipes-our-header text-center">
                                        <span>categories</span>
                                        <div className="text-center">
                                            <hr /> <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> <hr />
                                        </div>
                                    </div>

                                    <div className="categories-link">
                                        <a href="#"> <i className="fas fa-angle-right"></i> Post Cards <span className="">(12)</span></a>
                                    </div>
                                    <hr />
                                    <div className="categories-link">
                                        <a href="#"> <i className="fas fa-angle-right"></i> Brochers <span className="">(12)</span></a>
                                    </div>
                                    <hr />
                                    <div className="categories-link">
                                        <a href="#"> <i className="fas fa-angle-right"></i> Business Cards <span className="">(13)</span></a>
                                    </div>
                                    <hr />
                                    <div className="categories-link">
                                        <a href="#"> <i className="fas fa-angle-right"></i> Postel Cards <span className="">(14)</span></a>
                                    </div>
                                    <hr />
                                    <div className="categories-link">
                                        <a href="#"> <i className="fas fa-angle-right"></i> Printers <span className="">(15)</span></a>
                                    </div>
                                    <hr />
                                </div>
                            </div>
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
                                        <span>let's connect with us</span>
                                        <div className="text-center">
                                            <hr /> <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> <hr />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <i className="fab fa-facebook-f let-icon"></i>
                                        <i className="fab fa-twitter let-icon"></i>
                                        <i className="fab fa-linkedin-in let-icon"></i>
                                        <i className="fab fa-tumblr let-icon"></i>
                                        <i className="fab fa-vimeo-v let-icon"></i>
                                        <i className="fab fa-pinterest-p  let-icon"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog-row-padd">
                                <div className=" col-12 side-bar-bg">
                                    <div className="recipes-our-header text-center">
                                        <span>instagram feed</span>
                                        <div className="text-center">
                                            <hr /> <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> <hr />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-2.jpg" alt="" className="insta-img " /></div>
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-3.jpg" alt="" className="insta-img " /></div>
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-1.jpg" alt="" className="insta-img " /></div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-4.jpg" alt="" className="insta-img " /></div>
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-5.jpg" alt="" className="insta-img " /></div>
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-6.jpg" alt="" className="insta-img " /></div>
                                    </div>
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