// import { Route, Switch, Redirect } from 'react-router-dom';

import styles from './CategoriesBar.module.css';
import CategoriesLink from './CategoriesLink';
import { useCategoriesState } from '../../hooks/RecepeHooks/useCategoriesState';
// import { useRecipesState } from '../../hooks/RecepeHooks/useRecipesState';


export default function CategoriesBar() {
    const [categories] = useCategoriesState();
    // const [recipes] = useRecipesState();

    // let categoriesCount = recipes?.map(x => x.category).reduce(function (allCat, cat) {
    //     if (cat in allCat) {
    //         allCat[cat]++
    //     }
    //     else {
    //         allCat[cat] = 1
    //     }
    //     return allCat
    //   }, {});


    return (
        <div className={`row ${styles['blog-row-padd']}`}>
            <div className={`col-12 ${styles['side-bar-bg']}`}>
                <div className={`${styles['our-header']} text-center`}>
                    <span>categories</span>
                    <div className="text-center">
                        <hr /> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i> <hr />
                    </div>
                </div>
               
                {categories && categories.map(x => <CategoriesLink key={x._id} category={x} />)}
              

            </div>
        </div>
    );
}