import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './Details.module.css';

import * as recipeService from '../../../services/recipeService';
import { useRecipeState } from '../../../hooks/RecepeHooks/useRecipeState';

import Subheader from '../../../components/Subheader';
import Comments from '../../../components/Comments';
import AddComment from '../../../components/Comments/AddComment';
import SearchBar from '../../../components/SearchBar';
import CategoriesBar from '../../../components/CategoriesBar';
import PopularTags from '../../../components/PopularTags';
import RecipeDetailsContentCard from './DetailsContentCard';
import CategoriesBarTop from '../../../components/CategoriesBarTop';
import RecentRecipes from '../../../components/Recipes/Bar/RecentRecipes';
import { useAuthContext } from '../../../contexts/AuthContext';
import { RecipeContext } from '../../../contexts/RecipeContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import Page from '../../Page';

export default function RecipeDetails() {
    const { user } = useAuthContext();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useRecipeState(recipeId);
    const [show, setShow] = useState(false);
    const { addNotification } = useNotificationContext();
    let navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const deleteRecipeHandler = (e) => {
        e.preventDefault();
        setShow(false);
        recipeService.deleteOne(recipeId, user.accessToken)
            .then(() => {
                navigate('/recipes/catalog');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const likeButtonClickHandler = () => {
        console.log('Like');
        if (recipe.likes.includes(user._id)) {
            addNotification('You already liked this recipe', types.warning, 'Warning')
            console.log(recipe);
            console.log('User already liked');
            return;
        }
        let likes = [...recipe.likes, user._id]
        recipeService.like(recipe._id, likes, user.accessToken)
            .then((responseData) => {
                addNotification('You liked this recipe successfully', types.success, 'Success')
                setRecipe(state => ({
                    ...state,
                    likes,

                }));
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <Page>
            <RecipeContext.Provider value={{ recipe, deleteRecipeHandler, show, handleShow, handleClose, likeButtonClickHandler }}>
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
            </RecipeContext.Provider>
        </Page>
    );
}