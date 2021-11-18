import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import RecipeCatalog from './pages/RecipeCatalog';
import RecipeCatalog2 from './pages/RecipeCatalog2';
import RecipeDetails from './pages/RecipeDetails';
import RecipeCreate from './pages/RecipeCreate';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';


function App() {
    return (
        <>
            <Header />

            <Menu/>

            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/recipes/catalog" exact component={RecipeCatalog} />
                    <Route path="/recipes/catalog/alternative" exact component={RecipeCatalog2} />
                    <Route path="/recipes/create" exact component={RecipeCreate} />
                    <Route path="/chefs" exact component={RecipeCreate} />
                    <Route path="/recipes/:recipeId" exact component={RecipeDetails} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/logout" render={(props) =>{
                        console.log('Logged out');
                        // props.history.push('/');
                        return <Redirect to="/" />
                    }} />
                </Switch>
            </>

            <Footer />

        </>
    );
}

export default App;
