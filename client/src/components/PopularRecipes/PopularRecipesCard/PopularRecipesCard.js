export default function PopularRecipes() {
    return (
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
    );
}