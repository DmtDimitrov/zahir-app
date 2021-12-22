import { useParams } from 'react-router-dom'

import styles from './ChefRecipes.module.css';

import Page from '../../Page';
import Subheader from '../../../components/Subheader';
import RecentRecipes from '../../../components/Recipes/Bar/RecentRecipes';
import CatalogCard from '../../../components/Recipes/CatalogCard';
import TopRecipes from '../../../components/Recipes/Bar/TopRecipes';
import { useChefState } from '../../../hooks/useChefState';


export default function ChefRecipes() {
    const { chefId } = useParams();
    const [chef] = useChefState(chefId);

    let chefName = chef && `${chef.firstName} ${chef.lastName}`;
    return (
        <Page>
            <Subheader
                title={`${chefName} Recipes`}
            />


            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className="col-lg-8 " >
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {chef && chef.recipes.map(x => <CatalogCard
                                    key={x._id}
                                    recipe={x}
                                    chefName={chefName}
                                />)}

                            </div>
                        </div>

                        <div className={`col-lg-4 ${styles['side-bar-colon']}`} >

                            <RecentRecipes />

                            <TopRecipes />

                        </div>
                    </div>
                </div>
            </div>

        </Page>

    );
}