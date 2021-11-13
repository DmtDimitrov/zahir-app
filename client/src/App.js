import Header from './components/Header';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
    return (

        <div>
            <Header />

            <Menu />

            <Carousel />




            <div className="main-container">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-12 our-header">
                            <h2> Why we are the best</h2>
                            <div className="text-center">
                                <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                            </div>
                        </div>
                    </div>
                    <div className="row row-pad">
                        <div className=" col-sm-6 col-md-3  our-spec">
                            <div className="text-center">
                                <i className="far fa-thumbs-up rounded-circle"></i>
                            </div>
                            <h3> Quality Printing</h3>
                            <p>If you have a problem if no one else can help and if you can find
                                can hire The A-Team.</p>
                            <div className="rd-btn">
                                <button className="read-more"> read more</button>
                            </div>
                        </div>
                        <div className=" col-sm-6 col-md-3  our-spec">
                            <div className="text-center">
                                <i className="fas fa-truck rounded-circle"></i>
                            </div>
                            <h3 > Ontime Delivery</h3>
                            <p>Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed.</p>
                            <div className="rd-btn">
                                <button className="read-more"> read more</button>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3  our-spec">
                            <div className="text-center">
                                <i className="fas fa-headphones-alt rounded-circle"></i>
                            </div>
                            <h3 > 24/7 Support</h3>
                            <p>The movie star the professor and Mary Ann here on Gilligans Michael Knight a young loner.</p>
                            <div className="rd-btn">
                                <button className="read-more"> read more</button>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3  our-spec">
                            <div className="text-center money-back">
                                <i className="far fa-money-bill-alt rounded-circle"></i>
                            </div>
                            <h3 > Money Back Guarentee</h3>
                            <p>The Brady Bunch the Brady Bunch that's the way we all became the
                                Brady Bunch</p>
                            <div className="rd-btn">
                                <button className="read-more"> read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-container promotion-bg">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-12 our-header prom-padd">
                            <h2> promotions products</h2>
                            <div className="text-center">
                                 <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 ">
                            <div className="product-top product-top-1 ">

                                <div className="overlay">
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars "></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="far fa-star stars"></i>
                                    <div> <span>45 Viewers</span> </div>
                                    <button> add to cart </button>
                                    <button> <i className="far fa-heart heart"></i> </button>

                                </div>
                            </div>
                            <div className="product-text">
                                <div className=" text-center"><span>Post Card</span> </div>
                                <p>$ 45</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 ">
                            <div className="product-top product-top-2">
                                <div className="overlay">
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars "></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="far fa-star stars"></i>
                                    <div> <span>45 Viewers</span> </div>
                                    <button> add to cart </button>
                                    <button> <i className="far fa-heart heart"></i> </button>
                                </div>
                            </div>
                            <div className="product-text">
                                <div className=" text-center"> <span>  Business Card</span></div>
                                <p>$ 129</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 ">
                            <div className="product-top product-top-3">
                                <div className="overlay">
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars "></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="far fa-star stars"></i>
                                    <div> <span>45 Viewers</span> </div>
                                    <button> add to cart </button>
                                    <button> <i className="far fa-heart heart"></i> </button>
                                </div>
                            </div>
                            <div className="product-text">
                                <div className=" text-center"><span>Post Card</span> </div>
                                <p>$ 79</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 ">
                            <div className="product-top product-top-4">
                                <div className="overlay">
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars "></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="fas fa-star stars"></i>
                                    <i className="far fa-star stars"></i>
                                    <div> <span>45 Viewers</span> </div>
                                    <button> add to cart </button>
                                    <button> <i className="far fa-heart heart"></i> </button>
                                </div>
                            </div>
                            <div className="product-text">
                                <div className=" text-center"><span>  Business Card</span></div>
                                <p>$ 159</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="main-container">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-12 our-header prom-padd">
                            <h2>our latest work</h2>
                            <div className="text-center">
                                <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                            </div>

                            <div className="linker-work js-filter button">
                                <button data-filter="*" >All Projects</button>   <button data-filter=".business"> Business Card</button>   <button data-filter=".postcard"> Post Cards</button>   <button data-filter=".brocher"> Brouchers</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row grid-gallery">
                    <div className="col-12">
                        <div className="row gallery-height">
                            <div className="col-lg-3 col-1-height col1-height col-over gallery-item brocher">
                                <div className="col-overlay padd-col  ">
                                    <div className="our-header">
                                        <p>Brouchers</p>
                                        <div className="icon-overlay">
                                            <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                            <a href="#">  <i className="fas fa-link"></i> </a>
                                        </div>
                                        <div className="text-center">
                                             <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row ">
                                    <div className=" col-lg-6  col2-height col-over gallery-item business">
                                        <div className="col-overlay padd-col ">
                                            <div className="our-header">
                                                <p>BUSINESS CARD</p>
                                                <div className="icon-overlay">
                                                    <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                                    <a href="#">  <i className="fas fa-link"></i> </a>
                                                </div>
                                                <div className="text-center">
                                                    <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-lg-6 col2-1-height col-over gallery-item business">
                                        <div className="col-overlay  ">
                                            <div className="our-header">
                                                <p>BUSINESS CARD</p>
                                                <div className="icon-overlay">
                                                    <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                                    <a href="#">  <i className="fas fa-link"></i> </a>
                                                </div>
                                                <div className="text-center">
                                                     <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col3-height col-over gallery-item business" >
                                        <div className="col-overlay  ">
                                            <div className="our-header">
                                                <p>BUSINESS CARD</p>
                                                <div className="icon-overlay">
                                                    <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                                    <a href="#">  <i className="fas fa-link"></i> </a>
                                                </div>
                                                <div className="text-center">
                                                    <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-1-height col1-2-height col-over gallery-item brocher">
                                <div className="col-overlay padd-col  ">
                                    <div className="our-header">
                                        <p>Brouchers</p>
                                        <div className="icon-overlay">
                                            <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                            <a href="#">  <i className="fas fa-link"></i> </a>
                                        </div>
                                        <div className="text-center">
                                            <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-3 r3-col r3-col-1 col-over gallery-item postcard">
                                <div className="col-overlay  ">
                                    <div className="our-header">
                                        <p>POST CARDS</p>
                                        <div className="icon-overlay">
                                            <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                            <a href="#">  <i className="fas fa-link"></i> </a>
                                        </div>
                                        <div className="text-center">
                                            <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-3 r3-col r3-col-2 col-over gallery-item postcard">
                                <div className="col-overlay  ">
                                    <div className="our-header">
                                        <p>POST CARDS</p>
                                        <div className="icon-overlay">
                                            <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                            <a href="#">  <i className="fas fa-link"></i> </a>
                                        </div>
                                        <div className="text-center">
                                            <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-3 r3-col r3-col-3 col-over gallery-item postcard">
                                <div className="col-overlay  ">
                                    <div className="our-header">
                                        <p>POST CARDS</p>
                                        <div className="icon-overlay">
                                            <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                            <a href="#">  <i className="fas fa-link"></i> </a>
                                        </div>
                                        <div className="text-center">
                                            <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 r3-col r3-col-4 col-over gallery-item postcard">
                                <div className="col-overlay  ">
                                    <div className="our-header">
                                        <p>POST CARDS</p>
                                        <div className="icon-overlay">
                                            <a href="#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                            <a href="#">  <i className="fas fa-link"></i> </a>
                                        </div>
                                        <div className="text-center">
                                            <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-container">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-12 our-header prom-padd">
                            <h2>our experienced team</h2>
                            <div className="text-center">
                                 <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> 
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 owl-seci">
                            <div className="owl-carousel owl-theme scren-owl">
                                <div className="item item-over ">
                                    <div className="item-bg item-bg-1">
                                        <div className="over-image">
                                            <span>Jhon Smith</span>
                                            <div className="social-icon">
                                                <i className="fab fa-facebook-f "></i>
                                                <i className="fab fa-twitter "></i>
                                                <i className="fab fa-linkedin-in "></i>
                                                <i className="fab fa-tumblr "></i>
                                            </div>
                                            <div className="details-link"> <a href="#">VIEW DETAILS  </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item item-over">
                                    <div className="item-bg item-bg-2">

                                        <div className="over-image">
                                            <span>Ana Kate</span>
                                            <div className="social-icon">
                                                <i className="fab fa-facebook-f "></i>
                                                <i className="fab fa-twitter "></i>
                                                <i className="fab fa-linkedin-in "></i>
                                                <i className="fab fa-tumblr "></i>
                                            </div>
                                            <div className="details-link"> <a href="#">VIEW DETAILS  </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item item-over">
                                    <div className="item-bg item-bg-3">

                                        <div className="over-image">
                                            <span>Johan Base</span>
                                            <div className="social-icon">
                                                <i className="fab fa-facebook-f "></i>
                                                <i className="fab fa-twitter "></i>
                                                <i className="fab fa-linkedin-in "></i>
                                                <i className="fab fa-tumblr "></i>
                                            </div>
                                            <div className="details-link"> <a href="#">VIEW DETAILS  </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item item-over">
                                    <div className="item-bg item-bg-4">

                                        <div className="over-image">
                                            <span>Elena Toga</span>
                                            <div className="social-icon">
                                                <i className="fab fa-facebook-f "></i>
                                                <i className="fab fa-twitter "></i>
                                                <i className="fab fa-linkedin-in "></i>
                                                <i className="fab fa-tumblr "></i>
                                            </div>
                                            <div className="details-link"> <a href="#">VIEW DETAILS  </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item item-over">
                                    <div className="item-bg item-bg-5">

                                        <div className="over-image">
                                            <span>Luka Jim </span>
                                            <div className="social-icon">
                                                <i className="fab fa-facebook-f "></i>
                                                <i className="fab fa-twitter "></i>
                                                <i className="fab fa-linkedin-in "></i>
                                                <i className="fab fa-tumblr "></i>
                                            </div>
                                            <div className="details-link"> <a href="#">VIEW DETAILS  </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item item-over">
                                    <div className="item-bg item-bg-6">
                                        <div className="over-image">
                                            <span>Nimi Sean</span>
                                            <div className="social-icon">
                                                <i className="fab fa-facebook-f "></i>
                                                <i className="fab fa-twitter "></i>
                                                <i className="fab fa-linkedin-in "></i>
                                                <i className="fab fa-tumblr "></i>
                                            </div>
                                            <div className="details-link"> <a href="#">VIEW DETAILS  </a> </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container contact-bg">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-con">
                                <h2> If You Satisfied in our works.</h2>
                                <p> If you have a problem if no one else can help and if you can find them maybe you can hire The A-Team. But they got diff'rent strokes. it takes diff'rent strokes to move the world. </p>

                                <div><a href="tel:+(11)123 456 7890" className="tel-number"> +(11)123 456 7890</a></div>
                                <div className="contact-btn"> <a href="#" className="contact" > Contact us</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-12 our-header prom-padd">
                            <h2>our happy clients say </h2>
                            <div className="text-center">
                                <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 owl-seci">
                            <div className="owl-carousel owl-theme owl-testimonial">
                                <div className="item item-over  ">
                                    <div className="all-testimonial">
                                        <div>
                                            <img className="img-box " src="max-image/happy-client-5.jpg" alt="" />
                                        </div>
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left"></i></p>
                                            <p>A man is born he's a man of means. Then along come two they got
                                                nothin' but their jeans. Well we're movin' on up to the
                                                east on air. I never thought I could feel so free. </p>
                                            <div className="stars-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <span> Michael Sommer</span>
                                        <p> Costumer</p>
                                    </div>
                                </div>
                                <div className="item item-over ">
                                    <div className="all-testimonial">
                                        <div>
                                            <img className="img-box " src="max-image/happy-client.jpg" alt="" />
                                        </div>
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left"></i></p>
                                            <p>Michael Knight a young loner on a crusade to champion the cause
                                                of the innocent. The helpless. The powerless in a world of 
                                                criminals who operate above the law.</p>
                                            <div className="stars-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <span> eliyana doe</span>
                                        <p> Costumer</p>
                                    </div>
                                </div>
                                <div className="item item-over ">
                                    <div className="all-testimonial">
                                        <div>
                                            <img className="img-box " src="max-image/happy-client-1.jpg" alt="" />
                                        </div>
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left"></i></p>
                                            <p>A man is born he's a man of means. Then along come two they got 
                                                nothin' but their jeans. Well we're movin' on up to the 
                                                east on air. I never thought I could feel so free. </p>
                                            <div className="stars-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <span> John doe</span>
                                        <p> Costumer</p>
                                    </div>
                                </div>
                                <div className="item item-over ">
                                    <div className="all-testimonial">
                                        <div>
                                            <img className="img-box " src="max-image/happy-client-3.jpg" alt="" />
                                        </div>
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left"></i></p>
                                            <p>Michael Knight a young loner on a crusade to champion the cause
                                                of the innocent. The helpless. The powerless in a world of 
                                                criminals who operate above the law.</p>
                                            <div className="stars-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <span> Maria Kate</span>
                                        <p> Costumer</p>
                                    </div>
                                </div>
                                <div className="item item-over ">
                                    <div className="all-testimonial">
                                        <div>
                                            <img className="img-box " src="max-image/happy-client-2.jpg" alt="" />
                                        </div>
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left"></i></p>
                                            <p>A man is born he's a man of means. Then along come two they got
                                                nothin' but their jeans. Well we're movin' on up to the 
                                                east on air. I never thought I could feel so free. </p>
                                            <div className="stars-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <span> Antonio Moreo</span>
                                        <p> Costumer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container partner-bg">
                <div className="inside-container ">
                    <div className="row">
                        <div className="col-12 owl-seci">
                            <div className="owl-carousel owl-theme owl-partner">
                                <div className="item item-over ">
                                    <div className="partner-logo ">
                                        <img src="logos/Logo 1.png" alt="" />
                                    </div>

                                </div>
                                <div className="item item-over ">
                                    <div className="partner-logo ">
                                        <img src="logos/Logo2.png" alt="" />
                                    </div>

                                </div>
                                <div className="item item-over ">
                                    <div className="partner-logo ">
                                        <img src="logos/Logo 3.png" alt="" />
                                    </div>

                                </div>
                                <div className="item item-over ">
                                    <div className="partner-logo ">
                                        <img src="logos/Logo 4.png" alt="" />
                                    </div>

                                </div>
                                <div className="item item-over ">
                                    <div className="partner-logo ">
                                        <img src="logos/Logo 1.png" alt="" />
                                    </div>

                                </div>
                                <div className="item item-over ">
                                    <div className="partner-logo ">
                                        <img src="logos/Logo2.png" alt="" />
                                    </div>

                                </div>
                                <div className="item item-over ">
                                    <div className="partner-logo ">
                                        <img src="logos/Logo 3.png" alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js"></script>
            <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
            <script src="js/script.js">  </script>

        </div>
    );
}

export default App;
