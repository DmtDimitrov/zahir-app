import './Home.css';
import Carousel from '../../components/Carousel';
import PopularRecipes from '../../components/PopularRecipes';
import LatestRecipes from '../../components/LatestRecipes';
import BestRecipes from '../../components/BestRecipes';

export default function Home() {
    return (
        <>
            <Carousel />

            <PopularRecipes />

            <LatestRecipes />

            <PopularRecipes />

            <BestRecipes />
        </>
    );
}