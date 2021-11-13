// import './Header.css';

export default function NavBar() {
    return (
        <div className="main-container nav-bg-color">
            <div className="inside-container nav-contain">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <img src="zahir/zahir3.png" className="img-fluid" alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-list ml-auto">
                            <a className="menu" href="index.html">HOME</a>
                            <a className="menu" href="#">ABOUT US</a>
                            <a className="menu" href="services.html">SERVICES</a>
                            <a className="menu" href="#">BUSINESS CARD</a>
                            <a className="menu" href="blog.html">BLOG</a>
                            <a className="menu" href="blog-single.html">SINGLE POST</a>
                            <a className="menu  last-spc" href="contact.html">CONTACT</a>
                            <span className="menu last-spc color-line"> | </span>
                            <a className="menu icon-color last-spc" href="#"><i className="fas fa-shopping-cart"></i></a>
                            <a className="menu icon-color  last-spc" href="#"><i className="fas fa-search"></i></a>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}