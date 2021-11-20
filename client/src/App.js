import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as authService from './services/authService';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import RecipeCatalog from './pages/RecipeCatalog';
// import RecipeCatalog2 from './pages/RecipeCatalog2';
import RecipeDetails from './pages/RecipeDetails';
import RecipeCreate from './pages/RecipeCreate';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';


function App() {
    const [userInfo, setUserInfo] = useState({ isAuth: false, username: '' });

    useEffect(() => {
        let username = authService.getUser();

        setUserInfo({
            isAuth: Boolean(username),
            username,
        });
    }, []);

    const onLogin = (username) => {
        setUserInfo({
            isAuth: true,
            username: username,
        })
    }
    return (
        <>
            <Header />

            <Menu {...userInfo} />

            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/recipes/catalog" exact component={RecipeCatalog} />
                    <Route path="/recipes/create" exact component={RecipeCreate} />
                    <Route path="/chefs" exact component={RecipeCreate} />
                    <Route path="/recipes/:recipeId" exact component={RecipeDetails} />
                    <Route path="/contact" exact component={Contact} />

                    <Route path="/login" render={() => {
                        return <Login onLogin={onLogin}/>
                    }} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/logout" render={(props) => {
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
