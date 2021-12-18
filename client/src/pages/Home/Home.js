import './Home.css';

import Page from '../Page';
import Carousel from '../../components/Recipes/home/Carousel';
import PopularRecipes from '../../components/Recipes/home/PopularRecipes';
import LatestRecipes from '../../components/Recipes/home/LatestRecipes';
import BestRecipes from '../../components/Recipes/home/BestRecipes';

export default function Home() {
    return (
        <Page>
            <Carousel />

            <BestRecipes />

            <LatestRecipes />

            <PopularRecipes />
        </Page>
    );
}