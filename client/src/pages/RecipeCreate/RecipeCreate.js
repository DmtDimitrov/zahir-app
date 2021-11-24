import { Redirect } from 'react-router-dom';

import styles from './RecipeCreate.module.css';
import Subheader from '../../components/Subheader';

import * as recipeService from '../../services/recipeService';

export default function RecipeCreate() {
    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let image = formData.get('image');
        let category = formData.get('category');
        let description = formData.get('description');
        let ingredient = formData.get('ingredient');
        let unit = formData.get('unit');
        let quantity = formData.get('quantity');
        let method = formData.get('method');

        recipeService.create({
            title,
            image,
            category,
            description,
            ingredient,
            unit,
            quantity,
            method,
        })
            .then(result => {
                <Redirect to="/" />
            })
        
        e.currentTarget.reset();
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
                                            <select name="category" id="" placeholder="Select category" className={styles['sb-input']}>
                                                <option value="Select category">Select category</option>
                                                <option value="Cake">Cake</option>
                                                <option value="Cream">Cream</option>
                                                <option value="Tart">Tart</option>
                                                <option value="Cupcake">Cupcake</option>
                                                <option value="Мuffin">Мuffin</option>
                                                <option value="Brownie">Brownie</option>
                                            </select>
                                            <textarea name="description" rows="3" className="area-text" placeholder="Short description..."></textarea>
                                            <div className="row">
                                                <div className="col-sm-6"> <input type="text" name="ingredient" placeholder="Ingredient Name" className={styles['sm-input']} /> </div>
                                                <div className="col-sm-3">  <input type="text" name="unit" placeholder="Unit" className={styles['sm-input']} /></div>
                                                <div className="col-sm-3">  <input type="text" name="quantity" placeholder="Quantity" className={styles['sm-input']} /></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 text-center">  <input type="submit" value="add group heading" className={styles['submit-btn']} /></div>
                                                <div className="col-sm-6 text-center">  <input type="submit" value="add next ingredient" className={styles['submit-btn']} /></div>
                                            </div>
                                            <label htmlFor="method">Method</label>
                                            <textarea name="method" rows="6" className="area-text" placeholder="Method..."></textarea>
                                            <div className="text-center">  <input type="submit" value="send mesage" className={styles['submit-btn']} /></div>
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