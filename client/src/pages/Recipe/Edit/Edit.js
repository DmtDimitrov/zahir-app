import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Edit.module.css';
import * as recipeService from '../../../services/recipeService';
import * as categoryService from '../../../services/categoryService';
import { useRecipeState } from '../../../hooks/RecepeHooks/useRecipeState';

import Subheader from '../../../components/Subheader';
import { useAuthContext } from '../../../contexts/AuthContext';
import Page from '../../Page';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import { useCategoryState } from '../../../hooks/RecepeHooks/useCategoryState';

export default function Edit() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useRecipeState(recipeId)
    const { user } = useAuthContext();
    const [ingredientInputs, setIngredientInputs] = useState([]);
    const [category] = useCategoryState();
    const { addNotification } = useNotificationContext();
    let navigate = useNavigate();

    if (!ingredientInputs.length > 0 && recipe) {
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
    }

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

        recipeService.edit(recipe._id, data, user.accessToken)
            .then(() => {
                addNotification('You edited this recipe successfully', types.success, 'Success')
                navigate(`/recipes/details/${recipe._id}`)
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

                                        <form onSubmit={onRecipeEdit} method="POST">
                                            <input
                                                type="text"
                                                name="title"
                                                placeholder="Title"
                                                className={styles['sb-input']}
                                                defaultValue={recipe?.title}
                                                onBlur={titleChangeHandler}
                                            />
                                            <input
                                                type="text"
                                                name="image"
                                                placeholder="imageUrl"
                                                className={styles['sb-input']}
                                                defaultValue={recipe?.image}
                                            />

                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <select
                                                        name="category"
                                                        id=""
                                                        placeholder="Select category"
                                                        className={styles['sb-input']}
                                                        value={recipe?.category}
                                                        onChange={(e) => setRecipe(s => ({ ...s, category: e.target.value }))}
                                                    >
                                                        <option default>Select category</option>
                                                        {Object.keys(category).map(x => <option key={x} value={x}>{x}</option>)}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <input
                                                        onClick={addCategoryHandler}
                                                        type="submit"
                                                        value="add category"
                                                        className={styles['submit-btn']}
                                                    />
                                                </div>

                                            </div>

                                            <textarea
                                                name="description"
                                                rows="3"
                                                className="area-text"
                                                placeholder="Short description..."
                                                defaultValue={recipe?.description}
                                            >
                                            </textarea>

                                            {
                                                ingredientInputs.map((x, index) => (
                                                    <div className="row mt-3" key={x._id}>
                                                        <div className="col-sm-6">
                                                            <input
                                                                onChange={(e) => onChangeIngredients(e, index)}
                                                                type="text"
                                                                name="Ingredient"
                                                                placeholder="Ingredient Name"
                                                                value={x.Ingredient}
                                                                className={
                                                                    x.errors.Ingredient
                                                                        ? `${styles['sm-input']} form-control is-invalid`
                                                                        : `${styles['sm-input']} form-control`
                                                                }
                                                            />
                                                            {x.errors.Ingredient && (
                                                                <div className="invalid-feedback">
                                                                    {x.errors.Ingredient}
                                                                </div>
                                                            )}
                                                        </div>


                                                        <div className="col-sm-2">
                                                            <input
                                                                onChange={(e) => onChangeIngredients(e, index)}
                                                                type="text"
                                                                name="Unit"
                                                                placeholder="Unit"
                                                                value={x.Unit}
                                                                className={
                                                                    x.errors.Unit
                                                                        ? `${styles['sm-input']} form-control is-invalid`
                                                                        : `${styles['sm-input']} form-control`
                                                                }
                                                            />
                                                            {x.errors.Unit && (
                                                                <div className="invalid-feedback">
                                                                    {x.errors.Unit}
                                                                </div>
                                                            )}
                                                        </div>


                                                        <div className="col-sm-3">
                                                            <input
                                                                onChange={(e) => onChangeIngredients(e, index)}
                                                                type="text"
                                                                name="Quantity"
                                                                placeholder="Quantity"
                                                                value={x.Quantity}
                                                                className={
                                                                    x.errors.Quantity
                                                                        ? `${styles['sm-input']} form-control is-invalid`
                                                                        : `${styles['sm-input']} form-control`
                                                                }
                                                            />
                                                            {x.errors.Quantity && (
                                                                <div className="invalid-feedback">
                                                                    {x.errors.Quantity}
                                                                </div>
                                                            )}
                                                        </div>


                                                        <div className="col-sm-1">
                                                            <button
                                                                className="btn btn-warning"
                                                                onClick={(e) => removeIngredientInputHandler(e, index)}
                                                            >X</button>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                            <div className="row">
                                                <div className="col-sm-6 text-center">
                                                    <input
                                                        type="submit"
                                                        value="add group heading"
                                                        className={styles['submit-btn']}
                                                    />
                                                </div>
                                                <div className="col-sm-6 text-center">
                                                    <input
                                                        onClick={addIngredientHandler}
                                                        type="submit"
                                                        value="add next ingredient"
                                                        className={styles['submit-btn']}
                                                    />
                                                </div>
                                            </div>
                                            <label htmlFor="method">Method</label>
                                            <textarea
                                                name="method"
                                                rows="6"
                                                className="area-text"
                                                placeholder="Method..."
                                                defaultValue={recipe?.method}
                                            ></textarea>
                                            <div className="text-center">
                                                <input
                                                    type="submit"
                                                    value="save"
                                                    className={styles['submit-btn']}
                                                />
                                            </div>
                                        </form>
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