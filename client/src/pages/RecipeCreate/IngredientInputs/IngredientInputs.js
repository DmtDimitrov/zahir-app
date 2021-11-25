// import styles from './RecipeCreate.module.css';


export default function IngredientInputs(
    {
        index
    }
) {

    return (

        <div className="row">
            <div className="col-sm-6"> <input type="text" name={`ingredient${index}`} placeholder="Ingredient Name" className={styles['sm-input']} /> </div>
            <div className="col-sm-3">  <input type="text" name={`unit${index}`} placeholder="Unit" className={styles['sm-input']} /></div>
            <div className="col-sm-3">  <input type="text" name={`quantity${index}`} placeholder="Quantity" className={styles['sm-input']} /></div>
        </div>

    );
}