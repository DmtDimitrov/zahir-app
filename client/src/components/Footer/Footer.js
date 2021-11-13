// import './Header.css';

export default function Footer() {
    return (
        <footer class="page-footer footer-bg">
        <div class="inside-container">
            <div class="row footer-padd">
                <div class=" col-sm-6 col-lg-3 foot-col-padd">
                    <div class="foot-logo"><img src="zahir/zahir4.png" alt="" class="img-fluid"/></div>
                    <div class="dream-text">
                        <p>Got a dream and we just know now we're gonna make our dream come true. No phone no lights no
                            motor car not a single luxury. </p>
                    </div>
                    <div>
                        <i class="fab fa-facebook-f foot-icon "></i>
                        <i class="fab fa-twitter foot-icon "></i>
                        <i class="fab fa-linkedin-in foot-icon "></i>
                        <i class="fab fa-tumblr  foot-icon"></i>
                        <i class="fab fa-vimeo-v  foot-icon"></i>
                        <i class="fab fa-pinterest-p foot-icon "></i>
                    </div>
                </div>
                <div class=" col-sm-6 col-lg-3 pop-col">
                    <span>popular link</span>
                    <hr/>
                    <div class="row">
                        <div class="col-6 pop-link">
                            <a href="#">About Us</a>
                            <a href="#">Services</a>
                            <a href="#">Gallery</a>
                            <a href="#">Team</a>
                            <a href="#">Pricing</a>

                        </div>
                        <div class=" col-6  pop-link">
                            <a href="#">contact us </a>
                            <a href="#"> blog</a>
                            <a href="#"> faq</a>
                            <a href="#"> 404</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6  col-lg-3 pop-col">
                    <span>recent news </span>
                    <hr/>
                    <div class="row ltl-blog row-ltl-blog">
                        <div class="col-3"> <img src="blog/recent-post-1.jpg" alt="" class="blog-img"/></div>
                        <div class="col-9 max-award">
                            <p> Max Printshop wins an award</p>
                            <i class="far fa-heart blog-icon"></i> <span> 45 </span> <span class="blog-vl"> | </span>
                            <i class="far fa-comment blog-icon"></i><span> 34 </span>
                        </div>
                    </div>
                    <hr class="recent-hr"/>
                    <div class="text-center"><a href="#" class="view-blog"> view blog</a> </div>
                </div>
                <div class="col-sm-6 col-lg-3 pop-col ">
                    <span>contact us</span>
                    <hr/>
                    <div class="row contact-row-margin">
                        <i class="fas fa-map-marker-alt contact-icon"></i>
                        <p> Collins Street West,<br/> King Street, Melbourne.</p>
                    </div>
                    <div class="row contact-row-margin">
                        <i class="fas fa-phone fa-rotate-90 contact-icon"></i>
                        <p>+(11)123 456 789</p>
                    </div>
                    <div class="row contact-row-margin">
                        <i class="far fa-envelope contact-icon "> </i>
                        <p> info@flamix.com </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 copyright-text">
                    <p> &#169; 2019 <a href="http://digitaconnect.com/">Digital Connect</a>. All Rights Reserved </p>
                </div>
            </div>
        </div>
    </footer>
    );
}