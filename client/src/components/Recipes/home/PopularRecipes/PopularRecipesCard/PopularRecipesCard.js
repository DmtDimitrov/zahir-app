// import styles from './PopularRecipesCard.module.css';

export default function PopularRecipesCard() {
    return (
        <div className="col-sm-6 col-lg-3 ">
        <div className="product-top product-top-1 ">

            <div className="overlay">
                <i className="fas fa-star stars"></i>
                <i className="fas fa-star stars"></i>
                <i className="fas fa-star stars"></i>
                <i className="fas fa-star stars"></i>
                <i className="far fa-star stars"></i>
                <div> <span>45 Viewers</span> </div>
                <button> View </button>
                <button> <i className="far fa-heart heart"></i> </button>

            </div>
        </div>
        <div className="product-text">
            <div className=" text-center"><span>Red Velvet</span> </div>
            <p>By Cvetomira Kisyova</p>
        </div>
    </div>
    );
}