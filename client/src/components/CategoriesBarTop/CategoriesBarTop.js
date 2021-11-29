import { Route, Switch, Redirect } from 'react-router-dom';

import styles from './CategoriesBarTop.module.css';

export default function CategoriesBarTop() {

    return (
        <div className={styles['inside-container']}>
        <div className="row">
            <div className={`col-12 ${styles['our-header']} ${styles['prom-padd']}`}>
                <h4>categories</h4>
                <div className="text-center">
                <hr/> <i class={`far fa-square ${styles['rotate-45']}`}></i> <i class={`far fa-square ${styles['rotate-45']}`}></i>
                <hr/>
                </div>

                <div className={`${styles['linker-work']} js-filter button`}>
                    <button data-filter="*" >All Recipes</button>   
                    <button data-filter=".business"> Cakes</button>   
                    <button data-filter=".postcard"> Brownies</button>   
                    <button data-filter=".brocher"> Cupcakes</button>
                </div>
            </div>
        </div>
    </div>
    );
}