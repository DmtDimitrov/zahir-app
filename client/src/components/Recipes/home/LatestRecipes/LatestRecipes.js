import styles from './LatestRecipes.module.css';
import LatestRecipesCard from './LatestRecipesCard';

export default function LatestRecipes() {
    return (
        <div className={styles['main-container']}>
            <div className={styles['inside-container']}>
                <div className="row">
                    <div className={`col-12 ${styles['our-header']} ${styles['prom-padd']}`}>
                        <h2>latest recipes</h2>
                        <div className="text-center">
                            <hr /> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                            <hr />
                        </div>

                        {/* <div className={`${styles['linker-work']} js-filter button`}>
                            <button data-filter="*" >All Recipes</button>
                            <button data-filter=".business"> Cakes</button>
                            <button data-filter=".postcard"> Brownies</button>
                            <button data-filter=".brocher"> Cupcakes</button>
                        </div> */}
                    </div>
                </div>
            </div>

            <LatestRecipesCard />
            {/* <div className="row grid-gallery">
                <div className="col-12">
                    <div className="row gallery-height">
                        <div className="col-lg-3 col-1-height col1-height col-over gallery-item brocher">
                            <div className="col-overlay padd-col  ">
                                <div className="our-header">
                                    <p>Brouchers</p>
                                    <div className="icon-overlay">
                                        <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                        <a href="/#">  <i className="fas fa-link"></i> </a>
                                    </div>
                                    <div className="text-center">
                                        <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row ">
                                <div className=" col-lg-6  col2-height col-over gallery-item business">
                                    <div className="col-overlay padd-col ">
                                        <div className="our-header">
                                            <p>BUSINESS CARD</p>
                                            <div className="icon-overlay">
                                                <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                                <a href="/#">  <i className="fas fa-link"></i> </a>
                                            </div>
                                            <div className="text-center">
                                                <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-6 col2-1-height col-over gallery-item business">
                                    <div className="col-overlay  ">
                                        <div className="our-header">
                                            <p>BUSINESS CARD</p>
                                            <div className="icon-overlay">
                                                <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                                <a href="/#">  <i className="fas fa-link"></i> </a>
                                            </div>
                                            <div className="text-center">
                                                <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col3-height col-over gallery-item business" >
                                    <div className="col-overlay  ">
                                        <div className="our-header">
                                            <p>BUSINESS CARD</p>
                                            <div className="icon-overlay">
                                                <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                                <a href="/#">  <i className="fas fa-link"></i> </a>
                                            </div>
                                            <div className="text-center">
                                                <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-1-height col1-2-height col-over gallery-item brocher">
                            <div className="col-overlay padd-col  ">
                                <div className="our-header">
                                    <p>Brouchers</p>
                                    <div className="icon-overlay">
                                        <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                        <a href="/#">  <i className="fas fa-link"></i> </a>
                                    </div>
                                    <div className="text-center">
                                        <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-lg-3 r3-col r3-col-1 col-over gallery-item postcard">
                            <div className="col-overlay  ">
                                <div className="our-header">
                                    <p>POST CARDS</p>
                                    <div className="icon-overlay">
                                        <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                        <a href="/#">  <i className="fas fa-link"></i> </a>
                                    </div>
                                    <div className="text-center">
                                        <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 r3-col r3-col-2 col-over gallery-item postcard">
                            <div className="col-overlay  ">
                                <div className="our-header">
                                    <p>POST CARDS</p>
                                    <div className="icon-overlay">
                                        <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                        <a href="/#">  <i className="fas fa-link"></i> </a>
                                    </div>
                                    <div className="text-center">
                                        <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 r3-col r3-col-3 col-over gallery-item postcard">
                            <div className="col-overlay  ">
                                <div className="our-header">
                                    <p>POST CARDS</p>
                                    <div className="icon-overlay">
                                        <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                        <a href="/#">  <i className="fas fa-link"></i> </a>
                                    </div>
                                    <div className="text-center">
                                        <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 r3-col r3-col-4 col-over gallery-item postcard">
                            <div className="col-overlay  ">
                                <div className="our-header">
                                    <p>POST CARDS</p>
                                    <div className="icon-overlay">
                                        <a href="/#">  <i className="fas fa-compress-arrows-alt"></i></a>
                                        <a href="/#">  <i className="fas fa-link"></i> </a>
                                    </div>
                                    <div className="text-center">
                                        <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}