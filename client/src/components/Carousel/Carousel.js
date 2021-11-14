// import './Header.css';

export default function Carousel() {
    return (
        <div className="main-container carousel-height">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active first-slider">
                        <div className="inside-container">
                            <div className="row">
                                <div className="col-lg-12  ">
                                    <div className="carousel-text">
                                        <h1>Handmade <span className="second">pastries</span> and <span className="bs-card"> cakes</span></h1>
                                        <p>Тake a look at our recipe suggestions.</p>
                                        <div className="butns">
                                            <button className="about-btn">about us </button>
                                            <button className="work-btn">recipes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  first-slider-1">
                        <div className="inside-container">
                            <div className="row">
                                <div className="col-lg-12 ">
                                    <div className="carousel-text">
                                        <span>Handmade <span className="second">pastries</span> and <span className="bs-card"> cakes</span></span>
                                        <p>Тake a look at our recipe suggestions.</p>
                                        <div className="butns">
                                            <button className="about-btn">about us </button>
                                            <button className="work-btn">recipes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span ><i className="fas fa-arrow-right  fa-rotate-180 arrow"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span ><i className="fas fa-arrow-right arrow"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}