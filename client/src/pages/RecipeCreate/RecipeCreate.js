import styles from './RecipeCreate.module.css';
import Subheader from '../../components/Subheader';

export default function RecipeCreate() {
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

                                        <form action="#">
                                            <input type="text" placeholder="Title" className={styles['sb-input']} />
                                            <textarea rows="3" className="area-text" placeholder="Short description..."></textarea>
                                            <div className="row">
                                                <div className="col-sm-6"> <input type="text" placeholder="Ingredient Name" className={styles['sm-input']} /> </div>
                                                <div className="col-sm-3">  <input type="email" placeholder="Unit" className={styles['sm-input']} /></div>
                                                <div className="col-sm-3">  <input type="email" placeholder="Quantity" className={styles['sm-input']} /></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 text-center">  <input type="submit" value="add group heading" className={styles['submit-btn']} /></div>
                                                <div className="col-sm-6 text-center">  <input type="submit" value="add next ingredient" className={styles['submit-btn']} /></div>
                                            </div>
                                            <label htmlFor="method">Method</label>
                                            <textarea rows="6" className="area-text" placeholder="Method..."></textarea>
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