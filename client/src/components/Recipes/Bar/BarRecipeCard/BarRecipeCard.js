import { NavLink } from 'react-router-dom';

import styles from './BarRecipeCard.module.css';

export default function BarRecipeCard({ recipe }) {

    return (
        <>
            <div className={`row ${styles['ltl-blog']}`}>
                <div className="col-4">
                    <NavLink to={`/recipes/${recipe._id}`}>
                        <img src={recipe?.image} alt="" className={`${styles['recent-img']} img-fluid`} />
                    </NavLink>
                </div>
                <div className={`col-8 ${styles['max-award']}`}>
                    <p> {recipe?.title}</p>
                    <i className={`far fa-heart ${styles['blog-icon']}`}></i>
                    <span> {recipe?.likes.length} </span>
                    <span className={styles['blog-vl']}> | </span>
                    <i className={`far fa-comment ${styles['blog-icon']}`}></i>
                    <span> {recipe?.comments.length} </span>
                </div>
            </div>
            <hr />
        </>
    );
}