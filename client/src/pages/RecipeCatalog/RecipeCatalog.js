import { useEffect, useState } from 'react';

import './RecipeCatalog.css';
import Subheader from '../../components/Subheader';
import Pagination from '../../components/Pagination';
import RecipeCard from './components/RecipeCard';
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

                            {recipes.length > 0
                                ? recipes.map(x => <RecipeCard key={x._id} recipe={x} navigationHandler={navigationHandler} />)
                                : <h3 className="no-articles">No recipes yet</h3>
                            }

                            <div className="row blog-row-padd">
                                <div className="col-md-12  ">
                                    <div className="blog-post">
                                        <div> <img src="blog/post-1.jpg" alt="" className="blog-image img-fluid" /></div>
                                        <div className="blog-description">
                                            <div className="text-center">  <a href="#"> Shop </a>
                                                <h2>Got a dream and we just know now gonna
                                                    make our dream come true.</h2>
                                                <div className="post-info"> <p> <span className="info-over">  <i className="far fa-user"></i> By Admin</span> <span className="spc-line"> |</span> <span className="info-over"> Dec 24,2016</span>
                                                    <span className="spc-line"> |</span> <span className="info-over"> <i className="far fa-heart"></i> 39 Likes </span> <span className="spc-line"> |</span>
                                                    <span className="info-over"> <i className="far fa-comment"></i> 55 comments </span> </p> </div>
                                            </div>

                                            <p> He busy revin' up his Powerful Mach So join us here each week my friends you're sure to get a smile from seven stranded castaways
                                                here on Gilligans Isle. Wouldn't you like to get away? Sometimes you want to go where everybody knows your name.</p>

                                            <div className="rd-btn">
                                                <button className="read-more"> read more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog-row-padd">
                                <div className="col-md-12  ">
                                    <div className="blog-post">
                                        <div> <img src="blog/post-2.jpg" alt="" className="blog-image img-fluid" /></div>
                                        <div className="blog-description">
                                            <div className="text-center">  <a href="#"> machine </a>
                                                <h2>What might be right for you may not
                                                    be right for some.</h2>
                                                <div className="post-info"> <p> <span className="info-over">  <i className="far fa-user"></i> By Admin</span> <span className="spc-line"> |</span> <span className="info-over"> May 17,2016</span>
                                                    <span className="spc-line"> |</span> <span className="info-over"> <i className="far fa-heart"></i> 45 Likes </span> <span className="spc-line"> |</span>
                                                    <span className="info-over"> <i className="far fa-comment"></i> 18 comments </span> </p> </div>
                                            </div>

                                            <p> Those were the days. Here he comes Here comes Speed Racer. He's a demon on wheels.
                                                Just two good ol' boys Never meanin' no harm. Beats all you've ever saw been in trouble with the law since the day they was born your name.</p>

                                            <div className="rd-btn">
                                                <button className="read-more"> read more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog-row-padd">
                                <div className=" col-md-12 ">
                                    <div className="blog-post">
                                        <div> <img src="blog/post-3.jpg" alt="" className="blog-image img-fluid" /></div>
                                        <div className="blog-description">
                                            <div className="text-center">  <a href="#"> Worker </a>
                                                <h2>heir house is a museum where people come to see ‘em.
                                                    They really are a screamed.</h2>
                                                <div className="post-info"> <p> <span className="info-over">  <i className="far fa-user"></i> By Admin</span> <span className="spc-line"> |</span> <span className="info-over"> Jan 24,2016</span>
                                                    <span className="spc-line"> |</span> <span className="info-over"> <i className="far fa-heart"></i> 85 Likes </span> <span className="spc-line"> |</span>
                                                    <span className="info-over"> <i className="far fa-comment"></i> 23 comments </span> </p> </div>
                                            </div>

                                            <p> He busy revin' up his Powerful Mach So join us here each week my friends you're sure to get a smile from seven stranded castaways
                                                here on Gilligans Isle. Wouldn't you like to get away? Sometimes you want to go where everybody knows your name.</p>

                                            <div className="rd-btn">
                                                <button className="read-more"> read more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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