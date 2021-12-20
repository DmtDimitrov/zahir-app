import styles from './BestRecipes.module.css';
import BestRecipesCard from './BestRecipesCard';
import { useRecipesState } from '../../../../hooks/RecepeHooks/useRecipesState';


export default function BestRecipes() {

    const [recipes] = useRecipesState();

    let topRecipes = recipes?.sort((a,b) => {
        return b.likes.length - a.likes.length
    })
    return (
        <div className={`${styles['main-container']} ${styles['promotion-bg']}`}>
            <div className={styles['inside-container']}>
                <div className="row">
                    <div className={`col-12 ${styles['our-header']} ${styles['prom-padd']}`}>
                        <h2> best recipes</h2>
                        <div className="text-center">
                            <hr /> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                {topRecipes && topRecipes.slice(0,3).map(x => <BestRecipesCard key={x._id} recipe={x} />)}
                    
                  
                </div>

            </div>
        </div>
    );
}