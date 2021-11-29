import styles from './RecentRecipeCard.module.css';

export default function RecentRecipeCard(recipe) {

    return (
        <>
            <div className={`row ${styles['ltl-blog']}`}>
                <div className="col-4">
                    <img src={recipe.image} alt="" className={`${styles['recent-img']} img-fluid`} />
                </div>
                <div className={`col-8 ${styles['max-award']}`}>
                    <p> {recipe.title}</p>
                    <i className={`far fa-heart ${styles['blog-icon']}`}></i>
                    <span> 79 </span>
                    <span className={styles['blog-vl']}> | </span>
                    <i className={`far fa-comment ${styles['blog-icon']}`}></i>
                    <span> 53 </span>
                </div>
            </div>
            <hr />
        </>
    );
}