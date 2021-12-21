import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Edit.module.css';
import * as recipeService from '../../../services/recipeService';
import { emptyFieldsChecker } from '../../../helpers/fieldsChecker';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import { useRecipeState } from '../../../hooks/RecepeHooks/useRecipeState';
import { useCategoriesState } from '../../../hooks/RecepeHooks/useCategoriesState';

import Subheader from '../../../components/Subheader';
import Page from '../../Page';
import EditForm from './EditForm';

export default function Edit() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useRecipeState(recipeId)
    const { user } = useAuthContext();
    const [ingredientInputs, setIngredientInputs] = useState([]);
    const [categories] = useCategoriesState();
    const { addNotification } = useNotificationContext();
    let navigate = useNavigate();
    useEffect(() => {
        let initialIngredientInputState = [];
        recipe?.ingredients.map(x => {

            let initialIngredientInput = {
                Ingredient: x.name,
                Unit: x.unit,
                Quantity: x.quantity,
                errors: {
                    Ingredient: null,
                    Unit: null,
                    Quantity: null,
                }
            };
            return initialIngredientInputState.push(initialIngredientInput)
        })

        setIngredientInputs(initialIngredientInputState);
    }, [recipe?.ingredients]);

    const oldStateIsValid = () => {
        if (ingredientInputs.length === 0) {
            return true;
        };

        const someEmpty = ingredientInputs.some((item) =>
            item.Ingredient === ''
            || item.Unit === ''
            || item.Quantity === ''
        );

        if (someEmpty) {
            ingredientInputs.map((item, index) => {
                const allOldState = [...ingredientInputs];

                if (ingredientInputs[index].Ingredient === '') {
                    allOldState[index].errors.Ingredient = 'Ingredient is required';
                }

                if (ingredientInputs[index].Unit === '') {
                    allOldState[index].errors.Unit = 'Unit is required';
                }

                if (ingredientInputs[index].Quantity === '') {
                    allOldState[index].errors.Quantity = 'Quantity is required';
                }

                return setIngredientInputs(allOldState);
            });
        }
        return !someEmpty;
    }

    const addCategoryHandler = (e) => {
    }

    const onRecipeEdit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let image = formData.get('image');
        let category = formData.get('category');
        let description = formData.get('description');
        let method = formData.get('method');

        let ingredientData = ingredientInputs.map(x => ({ name: x.Ingredient, unit: x.Unit, quantity: x.Quantity }))
        console.log(ingredientData);

        let data = {
            title,
            category,
            description,
            ingredients: ingredientData,
            method,
            image,
        }

        if (!emptyFieldsChecker(data)) {
            return addNotification('All fields are required!', types.warning, 'Warning');
        }

        recipeService.edit(recipe._id, data, user.accessToken)
            .then(() => {
                addNotification('You edited this recipe successfully', types.success, 'Success')
                navigate(`/recipes/${recipe._id}`)
            })
            .catch(error => {
                console.log(error);
            });
        e.currentTarget.reset();
    }

    const addIngredientHandler = (e) => {
        e.preventDefault();
        const ingredientInputState = {
            Ingredient: '',
            Unit: '',
            Quantity: '',
            errors: {
                Ingredient: null,
                Unit: null,
                Quantity: null,
            }
        };

        if (oldStateIsValid()) {
            setIngredientInputs(oldState => [...oldState, ingredientInputState]);
        }
    };

    const onChangeIngredients = (event, index) => {
        event.preventDefault();
        event.persist();

        setIngredientInputs(oldState => {
            return oldState.map((item, i) => {

                if (i !== index) {
                    return item;
                };

                return {
                    ...item,
                    [event.target.name]: event.target.value,
                    errors: {
                        ...item.errors,
                        [event.target.name]: event.target.value.length > 0 ? null : [event.target.name] + ' Is required',
                    }
                };
            });
        });
    };

    const removeIngredientInputHandler = (e, index) => {
        e.preventDefault();

        setIngredientInputs(oldState => oldState.filter((item) => item !== oldState[index]))
    }

    const titleChangeHandler = (e) => {
        console.log(e.target.value);
    }
    return (
        <Page>
            <Subheader
                title="Edit Recipe"
            />
            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className=" col-lg-8 " >
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className={styles['add-recipe-container']}>
                                        <span>Edit Recipe</span>
                                        <hr />

                                        <EditForm
                                            recipe={recipe}
                                            category={categories}
                                            ingredientInputs={ingredientInputs}
                                            onChangeIngredients={onChangeIngredients}
                                            removeIngredientInputHandler={removeIngredientInputHandler}
                                            onRecipeEdit={onRecipeEdit}
                                            addCategoryHandler={addCategoryHandler}
                                            addIngredientHandler={addIngredientHandler}
                                            titleChangeHandler={titleChangeHandler}
                                            setRecipe={setRecipe}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}