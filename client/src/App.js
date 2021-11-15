import { useState, createElement } from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import RecipeCatalog from './pages/RecipeCatalog';
import RecipeDetails from './pages/RecipeDetails';
import RecipeCreate from './pages/RecipeCreate';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';


function App() {
    const [page, setPage] = useState('/home');

    const navigationHandler = (path) => {
        setPage(path);
    }

    const router = (path) => {
        let pathNames = path.split('/');

        let rootPath = pathNames[1];
        console.log('rootPath');
        console.log(rootPath);
        let argument = pathNames[2];

        const routes = {
            'home': <Home navigationHandler={navigationHandler} />,
            'recipes': <RecipeCatalog navigationHandler={navigationHandler} />,
            'details': <RecipeDetails navigationHandler={navigationHandler} />,
            'login': <Login navigationHandler={navigationHandler} />,
            'register': <Register navigationHandler={navigationHandler} />,
            'contact': <Contact navigationHandler={navigationHandler} />,
            'add': <RecipeCreate navigationHandler={navigationHandler} />,
            
        };
        return routes[rootPath]
    }
    return (

        <div>
            <Header />

            <Menu 
            navigationHandler={navigationHandler} 
            />

            <main>
                { router(page)} || <ErrorPage />
            </main>

            <Footer />

        </div>
    );
}

export default App;
