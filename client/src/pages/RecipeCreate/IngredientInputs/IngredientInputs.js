import styles from './IngredientInputs.module.css';


export default function IngredientInputs(
    {
        index,
        valueIngredient,
        valueUnit,
        valueQuantity,
        onChangeIngredients,
        removeIngredientInputHandler,
        className
    }
) {

    return (

        <div className="row mt-3">
            <div className="col-sm-6">
                <input onChange={(e) => onChangeIngredients(index, e)} type="text" name={`Ingredient-${index}`} placeholder="Ingredient Name" className={styles['sm-input']} />
                {}
            </div>
            <div className="col-sm-3">
                <input onChange={(e) => onChangeIngredients(index, e)} type="text" name={`Unit-${index}`} placeholder="Unit" className={styles['sm-input']} />
            </div>
            <div className="col-sm-2">
                <input onChange={(e) => onChangeIngredients(index, e)} type="text" name={`Quantity-${index}`} placeholder="Quantity" className={styles['sm-input']} />
            </div>
            <div className="col-sm-1">
                <button className="btn btn-warning" onClick={(e) => removeIngredientInputHandler(e, index)}>X</button>
            </div>
        </div>

    );
}