import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import styles from './RecipeDetails.module.css';
import Subheader from '../../components/Subheader';
import Comments from '../../components/Comments';
import AddComment from '../../components/Comments/AddComment';
import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../components/CategoriesBar';
import PopularTags from '../../components/PopularTags';
import RecipeDetailsContentCard from './RecipeDetailsContentCard';
import CategoriesBarTop from '../../components/CategoriesBarTop';
import RecentRecipes from '../../components/RecentRecipes';
import { AuthContext } from '../../contexts/AuthContext'; 


export default function RecipeDetails({
    match
}) {
    const { user } = useContext(AuthContext);
    const [recipe, setRecipe] = useState(null);
    const { recipeId } = useParams();

    // const recipeId = match.params.recipeId;

    useEffect(() => {
        recipeService.getOne(recipeId)
        .then(result =>{
            setRecipe(result);
        })
    }, [recipeId]);

   
    // console.log(recipe);
    return (
        <>
            <Subheader
                title="Recipe Details"
            />

            <div className={`${styles['main-container']} ${styles['recipe-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">

                        <CategoriesBarTop />

                        <div className=" col-lg-8 " >

                            {recipe && <RecipeDetailsContentCard {...recipe} />}

                            <Comments />

                            <AddComment />

                        </div>
                      
                        <div className={`col-lg-4 ${styles['side-bar-colon']}`} >

                            <SearchBar />

                            <CategoriesBar />

                            <RecentRecipes {...recipe} />

                            <PopularTags
                                title="Popular Tags"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}