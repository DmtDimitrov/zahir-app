
import styles from './Catalog.module.css';

import Page from '../../Page';
import Subheader from '../../../components/Subheader';
import RecentRecipes from '../../../components/Recipes/Bar/RecentRecipes';
import TopRecipes from '../../../components/Recipes/Bar/TopRecipes';
import RecipesCard from '../components/CatalogCard';
import CategoriesBar from '../../../components/CategoriesBar';

import { useRecipesState } from '../../../hooks/RecepeHooks/useRecipesState';


export default function RecipeCatalog() {
    const [recipes] = useRecipesState();

    return (
        <Page>
            <Subheader
                title="Recipes"
            />

            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className="col-lg-8 " >
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {recipes && recipes.map(x => <RecipesCard key={x._id} recipe={x} />)}

                            </div>
                        </div>

                        <div className={`col-lg-4 ${styles['side-bar-colon']}`} >

                            <CategoriesBar />

                            <RecentRecipes />

                            <TopRecipes />


                        </div>
                    </div>
                </div>
            </div>

        </Page>

    );
}