import styles from './PopularRecipes.module.css';
import PopularRecipesCard from './PopularRecipesCard';

export default function PopularRecipes() {
    return (
        <div className={`${styles['main-container']} ${styles['promotion-bg']}`}>
            <div className={styles['inside-container']}>
                <div className="row">
                    <div className={`col-12 ${styles['our-header']} ${styles['prom-padd']}`}>
                        <h2> popular recipes</h2>
                        <div className="text-center">
                        <hr/> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                        <hr/>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <PopularRecipesCard/>

                    <div className="col-sm-6 col-lg-3 ">
                        <div className="product-top product-top-2">
                            <div className="overlay">
                                <i className="fas fa-star stars"></i>
                                <i className="fas fa-star stars "></i>
                                <i className="fas fa-star stars"></i>
                                <i className="fas fa-star stars"></i>
                                <i className="far fa-star stars"></i>
                                <div> <span>45 Viewers</span> </div>
                                <button> add to cart </button>
                                <button> <i className="far fa-heart heart"></i> </button>
                            </div>
                        </div>
                        <div className="product-text">
                            <div className=" text-center"> <span>  Business Card</span></div>
                            <p>$ 129</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 ">
                        <div className="product-top product-top-3">
                            <div className="overlay">
                                <i className="fas fa-star stars"></i>
                                <i className="fas fa-star stars "></i>
                                <i className="fas fa-star stars"></i>
                                <i className="fas fa-star stars"></i>
                                <i className="far fa-star stars"></i>
                                <div> <span>45 Viewers</span> </div>
                                <button> add to cart </button>
                                <button> <i className="far fa-heart heart"></i> </button>
                            </div>
                        </div>
                        <div className="product-text">
                            <div className=" text-center"><span>Post Card</span> </div>
                            <p>$ 79</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 ">
                        <div className="product-top product-top-4">
                            <div className="overlay">
                                <i className="fas fa-star stars"></i>
                                <i className="fas fa-star stars "></i>
                                <i className="fas fa-star stars"></i>
                                <i className="fas fa-star stars"></i>
                                <i className="far fa-star stars"></i>
                                <div> <span>45 Viewers</span> </div>
                                <button> add to cart </button>
                                <button> <i className="far fa-heart heart"></i> </button>
                            </div>
                        </div>
                        <div className="product-text">
                            <div className=" text-center"><span>  Business Card</span></div>
                            <p>$ 159</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}