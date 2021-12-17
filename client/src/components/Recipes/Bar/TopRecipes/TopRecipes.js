import styles from '../css/RecipesBar.module.css';
import RecentRecipeCard from '../RecentRecipeCard';
import { useRecipesState } from '../../../../hooks/RecepeHooks/useRecipesState';

export default function TopRecipes() {
    const [recipes] = useRecipesState();

    let topRecipes = recipes?.sort((a,b) => {
        return b.likes.length - a.likes.length
    })

    return (
        <div className={`row ${styles['blog-row-padd']}`}>
            <div className={`col-12 ${styles['side-bar-bg']}`}>
                <div className={`${styles['our-header']} text-center`}>
                    <span>top recipes</span>
                    <div className="text-center">
                        <hr /><i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i><hr />
                    </div>
                </div>
                {topRecipes && topRecipes.slice(0,3).map(x => <RecentRecipeCard key={x._id} recipe={x} />)}


            </div>
        </div>
    );
}
