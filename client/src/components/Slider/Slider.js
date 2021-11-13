// import './Header.css';

export default function Slider() {
    return (
        <div className="main-container carousel-height">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active first-slider">
                        <div className="inside-container">
                            <div className="row">
                                <div className="col-lg-12  ">
                                    <div className="carousel-text">
                                        <h1>With in <span className="second">seconds</span> to ready your <span className="bs-card"> business cards</span></h1>
                                        <p>They call him Flipper Flipper faster than lightning. No one you see is smarter than he. These  days are all Happy and Free. These days are all share them with me oh baby. Sometimes you knows your name.</p>
                                        <div className="butns">
                                            <button className="about-btn">about us </button>
                                            <button className="work-btn">our work</button>
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
                                        <span>With in <span className="second">seconds</span> to ready your <span className="bs-card"> business cards</span></span>
                                        <p>They call him Flipper Flipper faster than lightning. No one you see is smarter than he. These days are all Happy and Free. These days are all share them with me oh baby.
                                            Sometimes you knows your name.</p>
                                        <div className="butns">
                                            <button className="about-btn">about us </button>
                                            <button className="work-btn">our work</button>
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