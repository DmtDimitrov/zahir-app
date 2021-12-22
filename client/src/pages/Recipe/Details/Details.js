import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './Details.module.css';
import * as recipeService from '../../../services/recipeService';

import Page from '../../Page';
import Subheader from '../../../components/Subheader';
import RecipeDetailsContentCard from './DetailsContentCard';
import Comments from './Comments';
import AddComment from './AddComment';
import CategoriesBar from '../../../components/CategoriesBar';
import RecentRecipes from '../../../components/Recipes/Bar/RecentRecipes';
import TopRecipes from '../../../components/Recipes/Bar/TopRecipes';

import { useRecipeState } from '../../../hooks/RecepeHooks/useRecipeState';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';

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
                addNotification('You successfully deleted this this recipe', types.success, 'Success')
                navigate('/recipes/my-recipes');

            })
            .catch(error => {
                console.log(error);
            });
    }

    const likeButtonClickHandler = () => {
        if (recipe.likes.includes(user._id)) {
            addNotification('You already liked this recipe', types.warning, 'Warning')
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
           
                <Subheader
                    title="Recipe Details"
                />

                <div className={`${styles['main-container']} ${styles['recipe-container']}`}>
                    <div className={styles['inside-container']}>
                        <div className="row">


                            <div className=" col-lg-8 " >

                                {recipe && <RecipeDetailsContentCard
                                    recipe={recipe}
                                    likeButtonClickHandler={likeButtonClickHandler}
                                    deleteRecipeHandler={deleteRecipeHandler}
                                    show={show}
                                    handleShow={handleShow}
                                    handleClose={handleClose}
                                />}

                                <Comments recipeId={recipeId} />
                                {user?._id
                                    ? <AddComment recipeId={recipeId} />
                                    : ""
                                }


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