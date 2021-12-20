import styles from './ErrorPage.module.css';

import Page from '../Page';
import Subheader from '../../components/Subheader';
import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../components/CategoriesBar';
import RecentRecipes from '../../components/Recipes/Bar/RecentRecipes';
import TopRecipes from '../../components/Recipes/Bar/TopRecipes';


export default function ErrorPage({
    children
}) {
    return (
        <Page>
            <Subheader
                title="Error Page"
            />






            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className="col-lg-8 " >
                            <h1>Page Not Found</h1>

                            {children && <p className="no-articles">{children}</p>}
                        </div>

                        <div className={`col-lg-4 ${styles['side-bar-colon']}`} >

                            <SearchBar />

                            <CategoriesBar />

                            <RecentRecipes />

                            <TopRecipes />


                        </div>
                    </div>
                </div>
            </div>

        </Page>
    );
}