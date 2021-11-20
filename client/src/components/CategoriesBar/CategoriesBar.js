import { Route, Switch, Redirect } from 'react-router-dom';

export default function CategoriesBar() {

    return (
        <div className="row blog-row-padd">
            <div className="col-12  side-bar-bg">
                <div className="recipes-our-header text-center">
                    <span>categories</span>
                    <div className="text-center">
                        <hr /> <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i> <hr />
                    </div>
                </div>


                <div className="categories-link">
                    <a href="#"> <i className="fas fa-angle-right"></i> Cakes <span className="">(12)</span></a>
                </div>
                <hr />
                <div className="categories-link">
                    <a href="#"> <i className="fas fa-angle-right"></i> Brownies <span className="">(12)</span></a>
                </div>
                <hr />
                <div className="categories-link">
                    <a href="#"> <i className="fas fa-angle-right"></i> Creams <span className="">(12)</span></a>
                </div>
                <hr />
                <div className="categories-link">
                    <a href="#"> <i className="fas fa-angle-right"></i> Tarts <span className="">(13)</span></a>
                </div>
                <hr />
                <div className="categories-link">
                    <a href="#"> <i className="fas fa-angle-right"></i> Cupcakes <span className="">(14)</span></a>
                </div>
                <hr />
                <div className="categories-link">
                    <a href="#"> <i className="fas fa-angle-right"></i> Мuffin <span className="">(15)</span></a>
                </div>
                <hr />
            </div>
        </div>
    );
}