import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
import { useAuthContext } from '../../contexts/AuthContext';
import { RecipeDetailsContext } from '../../contexts/RecipeDetailsContext';


export default function RecipeDetails({
    match
}) {
    const { user } = useAuthContext();
    const [recipe, setRecipe] = useState(null);
    const [show, setShow] = useState(false);
    const { recipeId } = useParams();
    let navigate = useNavigate();

    const handleClose = () => {

        setShow(false);
    }
    const handleShow = () => setShow(true);


    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                console.log(result);
                setRecipe(result);
            })
    }, [recipeId]);


    const deleteRecipeHandler = (e) => {
        e.preventDefault();
        setShow(false);
        recipeService.deleteOne(recipeId, user.accessToken)
            .then(() => {
                navigate('/recipes/catalog');
            });
    }

    const likeButtonClickHandler = () => {
        console.log('Like');
        if(recipe.likes.includes(user._id)){
            //TODO: add notificaton
         
            console.log(recipe);
            console.log('User already liked');
            return;
        }
        let likes = [...recipe.likes, user._id]
        recipeService.like(recipe._id, likes, user.accessToken)
            .then((responseData) => {
                console.log('RecipeDetails(likeButtonClickHandler): responseData');
                console.log(responseData);
                setRecipe(state => ({
                    ...state,
                    likes,
                    
                }));
            })
    };




    return (
        <RecipeDetailsContext.Provider value={{ recipe, deleteRecipeHandler, show, handleShow, handleClose, likeButtonClickHandler }}>
            <Subheader
                title="Recipe Details"
            />

            <div className={`${styles['main-container']} ${styles['recipe-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">

                        <CategoriesBarTop />

                        <div className=" col-lg-8 " >

                            {recipe && <RecipeDetailsContentCard />}

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
        </RecipeDetailsContext.Provider>
    );
}