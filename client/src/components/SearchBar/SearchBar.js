import styles from './SearchBar.module.css';

import { useRecipesState } from '../../hooks/RecepeHooks/useRecipesState';
import { useState } from 'react';


export default function SearchBar() {

    const [recipes, setRecipes] = useRecipesState();
    const [text, setText] = useState();
    console.log(recipes);
    const searchHandler = (e) => {
        setText(e.target.value);
        let filtered = recipes.filter((x) => x.title.includes(e.target.value)); 
        setRecipes(filtered);
    }

    return (
        <div className="row">
            <div className={`col-12 ${styles['side-bar-bg']}`}>
                <div className={`${styles['our-header']} text-center`}>
                    <span>Search</span>
                    <div className="text-center">
                        <hr /> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i> <hr />
                    </div>
                </div>

                <div className="input-group">
                    <input onBlur={searchHandler} className={styles['form-control']} type="search" placeholder="Type And Hit Enter" aria-label="Search" />
                    <div className="input-group-append">
                        <span onClick={(e) => searchHandler} className={`input-group-text ${styles['search-loop']}`} id="basic-text1"><i className="fas fa-search text-white " aria-hidden="true"></i></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

