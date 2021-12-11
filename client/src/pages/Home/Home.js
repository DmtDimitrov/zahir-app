import './Home.css';

import Page from '../Page';
import Carousel from '../../components/Carousel';
import PopularRecipes from '../../components/PopularRecipes';
import LatestRecipes from '../../components/LatestRecipes';
import BestRecipes from '../../components/BestRecipes';

export default function Home() {
    return (
        <Page>
            <Carousel />

            <PopularRecipes />

            <LatestRecipes />

            <BestRecipes />
        </Page>
    );
}