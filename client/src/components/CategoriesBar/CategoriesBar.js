// import { Route, Switch, Redirect } from 'react-router-dom';

import styles from './CategoriesBar.module.css';
import CategoriesLink from './CategoriesLink';

export default function CategoriesBar() {

    return (
        <div className={`row ${styles['blog-row-padd']}`}>
            <div className={`col-12 ${styles['side-bar-bg']}`}>
                <div className={`${styles['our-header']} text-center`}>
                    <span>categories</span>
                    <div className="text-center">
                        <hr /> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i> <hr />
                    </div>
                </div>

                <CategoriesLink
                    title="Cakes"
                    productsCount = "5"
                />

                <CategoriesLink
                    title="Brownies"
                    productsCount = "7"
                />

                <CategoriesLink
                    title="Creams"
                    productsCount = "10"
                />

                <CategoriesLink
                    title="Tarts"
                    productsCount = "2"
                />

                <CategoriesLink
                    title="Cupcakes"
                    productsCount = "9"
                />

                <CategoriesLink
                    title="Мuffin"
                    productsCount = "12"
                />
             
            </div>
        </div>
    );
}