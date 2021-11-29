import { useEffect, useState } from 'react';

import * as recipeService from '../../services/recipeService';
import styles from './RecipeCatalog.module.css';
import Subheader from '../../components/Subheader';
import Pagination from '../../components/Pagination';
import RecentRecipes from '../../components/RecentRecipes';
import RecipesCard from './RecipesCard';
import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../components/CategoriesBar';
import PopularTags from '../../components/PopularTags';


export default function RecipeCatalog({
    navigationHandler
}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result)
            })
    }, []);

   

    return (
        <>
            <Subheader
                title="Recipes"
            />


            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className="col-lg-8 " >
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {recipes.length > 0
                                    ? recipes.map(x => <RecipesCard key={x._id} recipe={x} />)
                                    : <h3 className="no-articles">No recipes yet</h3>
                                }

                            </div>
                        </div>
                        
                        <div className={`col-lg-4 ${styles['side-bar-colon']}`} >

                            <SearchBar/>

                            <CategoriesBar/>

                            <RecentRecipes/>
                            
                            <PopularTags
                                title="Popular Tags"
                            />

                        </div>
                    </div>
                </div>
            </div>

            <Pagination />

        </>

    );
}