// import './Header.css';

export default function Footer() {
    return (
        <footer className="page-footer footer-bg">
        <div className="inside-container">
            <div className="row footer-padd">
                <div className=" col-sm-6 col-lg-3 foot-col-padd">
                    <div className="foot-logo"><img src="zahir/zahir4.png" alt="" className="img-fluid"/></div>
                    <div className="dream-text">
                        <p>Got a dream and we just know now we're gonna make our dream come true. No phone no lights no
                            motor car not a single luxury. </p>
                    </div>
                    <div>
                        <i className="fab fa-facebook-f foot-icon "></i>
                        <i className="fab fa-twitter foot-icon "></i>
                        <i className="fab fa-linkedin-in foot-icon "></i>
                        <i className="fab fa-tumblr  foot-icon"></i>
                        <i className="fab fa-vimeo-v  foot-icon"></i>
                        <i className="fab fa-pinterest-p foot-icon "></i>
                    </div>
                </div>
                <div className=" col-sm-6 col-lg-3 pop-col">
                    <span>popular link</span>
                    <hr/>
                    <div className="row">
                        <div className="col-6 pop-link">
                            <a href="#">About Us</a>
                            <a href="#">Services</a>
                            <a href="#">Gallery</a>
                            <a href="#">Team</a>
                            <a href="#">Pricing</a>

                        </div>
                        <div className=" col-6  pop-link">
                            <a href="#">contact us </a>
                            <a href="#"> blog</a>
                            <a href="#"> faq</a>
                            <a href="#"> 404</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  col-lg-3 pop-col">
                    <span>recent news </span>
                    <hr/>
                    <div className="row ltl-blog row-ltl-blog">
                        <div className="col-3"> <img src="blog/recent-post-1.jpg" alt="" className="blog-img"/></div>
                        <div className="col-9 max-award">
                            <p> Max Printshop wins an award</p>
                            <i className="far fa-heart blog-icon"></i> <span> 45 </span> <span className="blog-vl"> | </span>
                            <i className="far fa-comment blog-icon"></i><span> 34 </span>
                        </div>
                    </div>
                    <hr className="recent-hr"/>
                    <div className="text-center"><a href="#" className="view-blog"> view blog</a> </div>
                </div>
                <div className="col-sm-6 col-lg-3 pop-col ">
                    <span>contact us</span>
                    <hr/>
                    <div className="row contact-row-margin">
                        <i className="fas fa-map-marker-alt contact-icon"></i>
                        <p> Collins Street West,<br/> King Street, Melbourne.</p>
                    </div>
                    <div className="row contact-row-margin">
                        <i className="fas fa-phone fa-rotate-90 contact-icon"></i>
                        <p>+(11)123 456 789</p>
                    </div>
                    <div className="row contact-row-margin">
                        <i className="far fa-envelope contact-icon "> </i>
                        <p> info@flamix.com </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 copyright-text">
                    <p> &#169; 2019 <a href="http://digitaconnect.com/">Digital Connect</a>. All Rights Reserved </p>
                </div>
            </div>
        </div>
    </footer>
    );
}