import './RecipeDetails.css';
import Subheader from '../../components/Subheader';

export default function RecipeDetails() {
    return (
        <>
            <Subheader
                title="Recipe Details"
            />

            <div className="main-container blog-container">
                <div className="inside-container">
                    <div className="row">
                        <div className=" col-lg-8 " >
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="blog-post">
                                        <div> <img src="blog/post-2.jpg" alt="" className="blog-image img-fluid" /></div>
                                        <div className="blog-description">
                                            <div className="text-center">  <a href="#"> Shop </a>
                                                <h1>Got a dream and we just know now gonna
                                                    make our dream come true.</h1>
                                                <div className="post-info"> <p> <span className="info-over">  <i className="far fa-user"></i> By Admin</span> <span className="spc-line"> |</span> <span className="info-over"> Dec 24,2016</span>
                                                    <span className="spc-line"> |</span> <span className="info-over"> <i className="far fa-heart"></i> 39 Likes </span> <span className="spc-line"> |</span>
                                                    <span className="info-over"> <i className="far fa-comment"></i> 55 comments </span> </p> </div>
                                            </div>

                                            <p> He busy revin' up his Powerful Mach So join us here each week my friends you're sure to get a smile from seven stranded castaways
                                                here on Gilligans Isle. Wouldn't you like to get away? Sometimes you want to go where everybody knows your name.A shadowy flight into the dangerous world of a man who does
                                                not exist.Come and knock on our door.</p>


                                            <div className="explore">
                                                <p> Explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.
                                                </p>
                                                <i className="fas fa-quote-right"></i>
                                            </div>
                                            <p>
                                                Sometimes you want to go where everybody knows your name. And they're always glad you came. Makin' your way in the world today takes everything you've got.
                                                Takin' a break from all your worries sure would help a lot. Makin' your way in the world today takes everything you've got.
                                            </p>
                                            <div className="row">
                                                <div className="col-md-8  btn-icon">
                                                    <button>About us</button>
                                                    <button>Services</button>
                                                    <button>Gallery</button>
                                                </div>
                                                <div className=" col-md-4 ">
                                                    <div className="text-right icon-btn">

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


                            <div className="row">
                                <div className="col-sm-12  ">
                                    <div className="comment-container">
                                        <span>comments(3)</span>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-2 ">
                                                <img src="max-image/happy-client-1.jpg" alt="" className="comment-img img-fluid" />
                                            </div>
                                            <div className="col-sm-10">
                                                <div className="comment-text" >
                                                    <span> Adam Smith <span className="vr-line" >|</span> <span className="date-span">May 27, 2016</span></span>
                                                    <p>
                                                        If you threw a party - invited everyone you knew. You would see the biggest gift would be from me and the card who does not exist.
                                                    </p>
                                                    <p className="reply"> <i className="fas fa-reply"></i> Reply </p>
                                                </div>
                                            </div>
                                            <hr className="comment-line" />
                                        </div>
                                        <div className="row comment-row except-row">
                                            <div className="col-sm-2  ">
                                                <img src="max-image/happy-client.jpg" alt="" className="comment-img img-fluid" />
                                            </div>
                                            <div className="col-sm-10 ">
                                                <div className="comment-text" >
                                                    <span> Eliana Doe <span style={{ color: '#aeaeae' }} >|</span> <span style={{ color: '#f65aa7' }}>Oct 07, 2016</span></span>
                                                    <p>
                                                        Their house is a museum where people come to see ‘em. They really are a scream the Addams Family.
                                                    </p>
                                                    <p className="reply"> <i className="fas fa-reply"></i> Reply </p>
                                                </div>
                                            </div>
                                            <hr className="comment-line" />
                                        </div>
                                        <div className="row comment-row ">
                                            <div className="col-sm-2 ">
                                                <img src="max-image/happy-client-3.jpg" alt="" className="comment-img img-fluid" />
                                            </div>
                                            <div className="col-sm-10 ">
                                                <div className="comment-text" >
                                                    <span> Julie Jackey <span style={{ color: '#aeaeae' }} >|</span> <span style={{ color: '#f65aa7' }}>Dec 24, 2016</span></span>
                                                    <p>
                                                        Didn't need no welfare states. Everybody pulled his weight. Gee our old Lasalle ran great. Those were the days.
                                                    </p>
                                                    <p className="reply"> <i className="fas fa-reply"></i> Reply </p>
                                                </div>
                                            </div>
                                            <hr className="comment-line" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className="comment-container">
                                        <span>Leave a comment</span>
                                        <hr />


                                        <form action="#">
                                            <div className="row">
                                                <div className="col-sm-6"> <input type="text" placeholder="Your Name*" className="sm-input" /> </div>
                                                <div className="col-sm-6">  <input type="email" placeholder="Your Email*" className="sm-input" /></div>
                                            </div>
                                            <input type="text" placeholder="Subject" className="sb-input" />
                                            <textarea rows="6" className="area-text" placeholder="Type Your Mesage Here..."></textarea>
                                            <div className="text-center">  <input type="submit" value="send mesage" className="submit-btn" /></div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=" col-lg-4 side-bar-colon" >
                            <div className="row ">
                                <div className="col-12  side-bar-bg">
                                    <div className="our-header text-center">
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
                                    <div className="our-header text-center">
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
                                    <div className="our-header text-center">
                                        <span>instagram feed</span>
                                        <div className="text-center">
                                            <hr /> <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> <hr />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-1.jpg" alt="" className="insta-img " /></div>
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-2.jpg" alt="" className="insta-img " /></div>
                                        <div className="col-md-4  insta-margin" ><img src="blog/insta-3.jpg" alt="" className="insta-img " /></div>
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