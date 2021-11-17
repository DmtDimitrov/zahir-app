import { NavLink } from 'react-router-dom';

// import './Header.css';

export default function Menu() {
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
                            <NavLink className="menu" to="/">HOME</NavLink>
                            <NavLink className="menu" to="/recipes/catalog">RECIPES</NavLink>
                            <NavLink className="menu" to="/recipes/catalog/alternative">2</NavLink>
                            <NavLink className="menu" to="/recipes/create">ADD RECIPE</NavLink>
                            <NavLink className="menu" to="/chefs">CHEFS</NavLink>
                            <NavLink className="menu" to="/recipes/:recipeId">RECIPE</NavLink>
                            <NavLink className="menu  last-spc" to="/contact">CONTACT</NavLink>
                            <span className="menu last-spc color-line"> | </span>
                            <NavLink className="menu" to="/register">REGISTER</NavLink>
                            <NavLink className="menu" to="/login">LOGIN</NavLink>
                            <NavLink className="menu" to="/logout">LOGOUT</NavLink>
                            <NavLink className="menu icon-color  last-spc" to="#"><i className="fas fa-search"></i></NavLink>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}