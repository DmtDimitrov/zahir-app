// import './Header.css';

export default function Menu({
    navigationHandler
}) {
    const onMenuClick = (e) => {
        e.preventDefault();
        // console.log('e.target.href');
        // console.log(e.target.href);
      
        if (e.target.tagName == 'A') {
            let url = new URL(e.target.href);

            console.log('url');
            console.log(url);
            // console.log(url.pathname);
            navigationHandler(url.pathname)
        }
    };
    return (
        <div className="main-container nav-bg-color">
            <div className="inside-container nav-contain">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <img src="zahir/zahir3.png" className="img-fluid" alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div onClick={onMenuClick} className="navbar-nav nav-list ml-auto">
                            <a className="menu" href="/home">HOME</a>
                            <a className="menu" href="/recipes">RECIPES</a>
                            <a className="menu" href="/recipes2">2</a>
                            <a className="menu" href="/add">ADD RECIPE</a>
                            <a className="menu" href="#">CHEFS</a>
                            <a className="menu" href="/details">RECIPE</a>
                            <a className="menu  last-spc" href="/contact">CONTACT</a>
                            <span className="menu last-spc color-line"> | </span>
                            <a className="menu" href="/register">REGISTER</a>
                            <a className="menu" href="/login">LOGIN</a>
                            <a className="menu" href="#">LOGOUT</a>
                            <a className="menu icon-color  last-spc" href="#"><i className="fas fa-search"></i></a>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}