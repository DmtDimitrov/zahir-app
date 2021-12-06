import { useEffect, useState } from 'react';

import * as recipeService from '../../services/recipeService';
import styles from './Catalog.module.css';
import Subheader from '../../components/Subheader';
import Pagination from '../../components/Pagination';
import RecentRecipes from '../../components/RecentRecipes';
import RecipesCard from './CatalogCard';
import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../components/CategoriesBar';
import PopularTags from '../../components/PopularTags';


export default function Catalog() {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result)
            })
    }, []);

   
console.log('recipes');
console.log(recipes);
    return (
        <>
            <Subheader
                title="New Catalog"
            />


            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className="col-lg-8 " >
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                { recipes && recipes.map(x => <RecipesCard key={x._id} recipe={x} />)}

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