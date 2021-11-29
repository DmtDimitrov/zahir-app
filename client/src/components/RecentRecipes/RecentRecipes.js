import styles from './RecentRecipes.module.css';
import RecentRecipeCard from './RecentRecipeCard';

export default function RecentRecipes(
    recipe
) {

    return (
        <div className={`row ${styles['blog-row-padd']}`}>
            <div className={`col-12 ${styles['side-bar-bg']}`}>
                <div className={`${styles['our-header']} text-center`}>
                    <span>recent post</span>
                    <div className="text-center">
                        <hr /><i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i><hr />
                    </div>
                </div>

                < RecentRecipeCard {...recipe}/>

            </div>
        </div>
    );
}
