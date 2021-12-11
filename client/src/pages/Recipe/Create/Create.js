import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Create.module.css';
import * as recipeService from '../../../services/recipeService';
import * as categoryService from '../../../services/categoryService';

import Subheader from '../../../components/Subheader';
// import IngredientInputs from './IngredientInputs';
import { useAuthContext } from '../../../contexts/AuthContext'; 

export default function RecipeCreate() {

    const { user } = useAuthContext();
    let navigate = useNavigate();
    const [ingredientInputs, setIngredientInputs] = useState([]);
    const [category, setCategory] = useState([]);

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

    useEffect(() => {
        categoryService.getAll()
            .then(result => {
                let categoryResult = Object.values(result);

                let categories = categoryResult.reduce((a, x) => {
                    if (!a[x.name]) {
                        a[x.name] = [];
                    }
                    a[x.name].push(x);
                    return a
                }, {});

                setCategory(categories)
            })
    }, []);

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

        console.log('ingredientInputs');
        console.log(ingredientInputs);

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

        recipeService.create(data, user.accessToken)
            .then(result => {
                navigate(`/recipes/catalog`)
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

    const onChangeIngredients = (index, event) => {
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
        <>
            <Subheader
                title="Own Recipe"
            />
            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className=" col-lg-8 " >
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className={styles['add-recipe-container']}>
                                        <span>Add Recipe</span>
                                        <hr />

                                        <form onSubmit={onRecipeCreate} method="POST">
                                            <input type="text" name="title" placeholder="Title" className={styles['sb-input']} />
                                            <input type="text" name="image" placeholder="imageUrl" className={styles['sb-input']} />

                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <select name="category" id="" placeholder="Select category" className={styles['sb-input']}>
                                                        <option default>Select category</option>
                                                        {Object.keys(category).map(x => <option key={x} value={x}>{x}</option>)}

                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <input onClick={addCategoryHandler}
                                                        type="submit"
                                                        value="add category"
                                                        className={styles['submit-btn']} />
                                                </div>

                                            </div>

                                            <textarea name="description"
                                                rows="3"
                                                className="area-text"
                                                placeholder="Short description...">
                                            </textarea>


                                            {
                                                ingredientInputs.map((x, index) => (
                                                    <div className="row mt-3" key={`ingredient-${index}`}>
                                                        <div className="col-sm-6">
                                                            <input onChange={(e) => onChangeIngredients(index, e)}
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
                                                            <input onChange={(e) => onChangeIngredients(index, e)}
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
                                                            <input onChange={(e) => onChangeIngredients(index, e)}
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
                                                            <button className="btn btn-warning"
                                                                onClick={(e) => removeIngredientInputHandler(e, index)}>X</button>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                            <div className="row">
                                                <div className="col-sm-6 text-center">
                                                    <input type="submit" value="add group heading" className={styles['submit-btn']} />
                                                </div>
                                                <div className="col-sm-6 text-center">
                                                    <input onClick={addIngredientHandler}
                                                        type="submit"
                                                        value="add next ingredient"
                                                        className={styles['submit-btn']} />
                                                </div>
                                            </div>
                                            <label htmlFor="method">Method</label>
                                            <textarea name="method" rows="6" className="area-text" placeholder="Method..."></textarea>
                                            <div className="text-center">
                                                <input type="submit" value="send mesage" className={styles['submit-btn']} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}