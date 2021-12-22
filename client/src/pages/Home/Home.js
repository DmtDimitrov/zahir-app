import './Home.css';

import Page from '../Page';
import Carousel from '../../components/Recipes/home/Carousel';
import BestRecipes from '../../components/Recipes/home/BestRecipes';

export default function Home() {
    return (
        <Page>
            <Carousel />

            <BestRecipes />

        </Page>
    );
}