import styles from './CreateForm.module.css';

export default function CreateForm({
    category,
    ingredientInputs,
    onChangeIngredients,
    removeIngredientInputHandler,
    onFormSubmit,
    // addCategoryHandler,
    addIngredientHandler
}) {
    return (
        <form onSubmit={onFormSubmit} method="POST">
            <input
                type="text"
                name="title"
                placeholder="Title"
                className={styles['sb-input']}
            />
            <input
                type="text"
                name="image"
                placeholder="imageUrl"
                className={styles['sb-input']}
            />

            <div className="row">
                <div className="col-sm-12">
                    <select
                        name="category"
                        id=""
                        placeholder="Select category"
                        className={styles['sb-input']}
                    >
                        <option default>Select category</option>
                        {/* {Object.keys(category).map(x => <option key={x} value={x}>{x}</option>)} */}
                        {category && category.map(x => <option key={x._id} value={x.name}>{x.name}</option>)}
                    </select>
                </div>
                {/* <div className="col-sm-3">
                    <input
                        onClick={addCategoryHandler}
                        type="submit"
                        value="add category"
                        className={styles['submit-btn']}
                    />
                </div> */}
            </div>

            <textarea
                name="description"
                rows="3"
                className="area-text"
                placeholder="Short description..."
            ></textarea>

            {
                ingredientInputs.map((x, index) => (
                    <div className="row mt-3" key={index}>
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
                                onClick={(e) => removeIngredientInputHandler(e, index)}>X</button>
                        </div>
                    </div>
                ))
            }

            <div className="row">
                {/* <div className="col-sm-6 text-center">
                    <input
                        type="submit"
                        value="add group heading"
                        className={styles['submit-btn']}
                    />
                </div> */}
                <div className="text-center">
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
            ></textarea>
            <div className="text-center">
                <input type="submit" value="create" className={styles['submit-btn']} />
            </div>
        </form>
    );
}