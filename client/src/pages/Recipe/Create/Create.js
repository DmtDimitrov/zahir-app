import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Create.module.css';
import * as recipeService from '../../../services/recipeService';

import Page from '../../Page';
import Subheader from '../../../components/Subheader';
import CreateForm from './CreateForm';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import { useCategoriesState } from '../../../hooks/RecepeHooks/useCategoriesState';
import { useRecipeContext } from '../../../contexts/RecipeContext';

export default function RecipeCreate() {
    const { user } = useAuthContext();
    let navigate = useNavigate();
    const [ingredientInputs, setIngredientInputs] = useState([]);
    const [categories] = useCategoriesState();
    const { addNotification } = useNotificationContext();
    const { resetRecipeContext } = useRecipeContext();

    useEffect(() => {
        resetRecipeContext()
    }, [])

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

    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let image = formData.get('image');
        let category = formData.get('category');
        let description = formData.get('description');
        let method = formData.get('method');

        let ingredientData = ingredientInputs.map(x => ({ name: x.Ingredient, unit: x.Unit, quantity: x.Quantity }))

        let data = {
            title,
            category,
            description,
            ingredients: ingredientData,
            method,
            image,
        }

        recipeService.create(data, user.accessToken)
            .then(result => {
                addNotification('You created new recipe successfully', types.success, 'Success')
                navigate(`/recipes/my-recipes`)
            })
            .catch(error => {
                console.log(error);
            })
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
    return (
        <Page>
            <Subheader
                title="Own Recipe"
            />
            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className="col-md-12  ">
                            <div className={styles['add-recipe-container']}>
                                <span>Add Recipe</span>
                                <hr />
                                <CreateForm
                                    category={categories}
                                    ingredientInputs={ingredientInputs}
                                    onChangeIngredients={onChangeIngredients}
                                    removeIngredientInputHandler={removeIngredientInputHandler}
                                    onFormSubmit={onRecipeCreate}
                                    addCategoryHandler={addCategoryHandler}
                                    addIngredientHandler={addIngredientHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}