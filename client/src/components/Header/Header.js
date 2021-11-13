// import './Header.css';

export default function Header() {
    return (
        <div className="main-container contact-color">
            <div className="inside-container ">
                <div className="row row-spc">
                    <div className="col-md-12  col-disp">
                        <div className="icon-scp" >
                            <div className="left-side">
                                <a className="link-head " href="#"><i className="fas fa-phone fa-rotate-90"></i>  +(11)123 456 7890</a> <span>|</span>
                                <a className="link-head " href="#"><i className="far fa-clock"></i> Sun-Mon: 9.00am to 7.00pm</a> <span>|</span>
                                <a className="link-head " href="#"><i className="far fa-envelope "> </i> info@flamix.com </a>
                            </div>
                        </div>
                        <div className="ml-auto icon-scp" >
                            <i className="fab fa-facebook-f "></i>
                            <i className="fab fa-twitter icon-scp"></i>
                            <i className="fab fa-linkedin-in icon-scp"></i>
                            <i className="fab fa-tumblr icon-scp"></i>
                            <i className="fab fa-vimeo-v icon-scp"></i>
                            <i className="fab fa-pinterest-p icon-scp"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}