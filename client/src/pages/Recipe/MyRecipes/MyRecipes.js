import { useEffect, useState, useContext } from 'react';

import * as recipeService from '../../../services/recipeService';
import styles from './MyRecipes.module.css';

import Subheader from '../../../components/Subheader';
import RecentRecipes from '../../../components/Recipes/Bar/RecentRecipes';
import TopRecipes from '../../../components/Recipes/Bar/TopRecipes';
import CatalogCard from '../../../components/Recipes/CatalogCard';
import CategoriesBar from '../../../components/CategoriesBar';
import { AuthContext } from '../../../contexts/AuthContext';
import Page from '../../Page';


export default function MyRecipes() {
    const [recipes, setRecipes] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        recipeService.getMy(user.accessToken)
            .then(result => {
                setRecipes(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [user.accessToken]);


    return (
        <Page>
            <Subheader
                title="My Recipes"
            />

            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className={`col-lg-8 ${styles['content-container']}`} >
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {recipes && recipes.length > 0
                                    ? recipes.map(x => <CatalogCard key={x._id} recipe={x} />)
                                    :
                                    <div className={styles['catalog-info']}>
                                        <h3>There is no recipes yet...</h3>
                                    </div>
                                }

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