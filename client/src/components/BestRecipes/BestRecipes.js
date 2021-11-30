import styles from './BestRecipes.module.css';
import BestRecipesCard from './BestRecipesCard';

export default function BestRecipes() {
    return (
        <div className={`${styles['main-container']} ${styles['promotion-bg']}`}>
            <div className={styles['inside-container']}>
                <div className="row">
                    <div className={`col-12 ${styles['our-header']} ${styles['prom-padd']}`}>
                        <h2> best recipes</h2>
                        <div className="text-center">
                        <hr/> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                        <hr/>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <BestRecipesCard/>
                    

                    <div className="col">
                        <div className="card h-100">
                            <img src="https://zahirsweetcreations.com/wp-content/uploads/2021/07/tart-sus-solen-karamel-01_crop_www-600x600.jpg" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Tart with salted caramel</h5>
                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://zahirsweetcreations.com/wp-content/uploads/2021/07/brauni-01_crop_www-600x600.jpg" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Brownie with walnuts and ganache</h5>
                            <p className ="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://zahirsweetcreations.com/wp-content/uploads/2021/07/tiramisu-v-burkancheta_big-01_crop_www-600x600.jpg" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Tiramisu</h5>
                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://zahirsweetcreations.com/wp-content/uploads/2021/11/mufin-s-krem-i-orehi_big-01_crop_www-600x600.jpg" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">Cupcake</h5>
                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}