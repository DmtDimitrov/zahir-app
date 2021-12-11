import { useEffect, useState, useContext } from 'react';

import * as recipeService from '../../../services/recipeService';
import styles from './Catalog.module.css';

import Subheader from '../../../components/Subheader';
import Pagination from '../../../components/Pagination';
import RecentRecipes from '../../../components/Recipes/RecentRecipes';
import RecipesCard from '../components/CatalogCard';
// import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../../components/CategoriesBar';
import PopularTags from '../../../components/PopularTags';
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


    console.log('recipes');
    console.log(recipes);
    return (
        <Page>
            <Subheader
                title="My Recipes"
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

                            <PopularTags
                                title="Popular Tags"
                            />

                        </div>
                    </div>
                </div>
            </div>

            <Pagination />

        </Page>

    );
}