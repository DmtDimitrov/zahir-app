// import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.css';
// import { AuthContext } from '../../contexts/AuthContext';
import { useAuthContext } from '../../contexts/AuthContext'

export default function Menu() {
    // const { user } = useContext(AuthContext)
    const { user } = useAuthContext();
    let guestNav = (
        <>
            <NavLink className={styles['menu']} to="/register">REGISTER</NavLink>
            <NavLink className={styles['menu']} to="/login">LOGIN</NavLink>
        </>
    );

    let userNav = (
        <>
            <NavLink className={styles['menu']} to="/recipes/create">ADD</NavLink>
            <NavLink className={styles['menu']} to="/recipes/create">MY RECIPES</NavLink>
            <NavLink className={styles['menu']} to="/logout">LOGOUT</NavLink>
            <span className={`${styles['menu']} ${styles['last-spc']} ${styles['color-line']}`}> {user.email} </span>
        </>
    );
    return (
        <div className={`${styles['main-container']} ${styles['nav-bg-color']}`}>
            <div className={`${styles['inside-container']} ${styles['nav-contain']}`}>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <img src="zahir/zahir3.png" className="img-fluid" alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className={`navbar-nav ${styles['nav-list']} ml-auto`}>
                            <NavLink className={styles['menu']} to="/home">HOME</NavLink>
                            <NavLink className={styles['menu']} to="/recipes/catalog">RECIPES</NavLink>
                            <NavLink className={styles['menu']} to="/chefs">CHEFS</NavLink>
                            <NavLink className={`${styles['menu']} ${styles['last-spc']}`} to="/contact">CONTACT</NavLink>
                            <span className={`${styles['menu']} ${styles['last-spc']} ${styles['color-line']}`}> | </span>
                            {
                                user.email
                                    ? userNav
                                    : guestNav
                            }
                            <NavLink className={`${styles['menu']} ${styles['icon-color']} ${styles['last-spc']}`} to="#"><i className="fas fa-search"></i></NavLink>


                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}