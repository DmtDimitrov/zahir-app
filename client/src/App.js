import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
// import ErrorPage from './pages/Error';
import RecipeCatalog from './pages/RecipeCatalog';
import RecipeDetails from './pages/RecipeDetails';
import RecipeCreate from './pages/RecipeCreate';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './components/Logout';
import Contact from './pages/Contact';


function App() {

    const [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: '',
        refreshToken: '',
    })

    const onLogin = (authData) => {
        setUser(authData);
    };

    const onLogout = () => {

    };

    return (
        <AuthContext.Provider value={true}>
            <Header />

            <Menu email={user.email} />

            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/recipes/catalog" exact component={RecipeCatalog} />
                    <Route path="/recipes/create" exact component={RecipeCreate} />
                    <Route path="/chefs" exact component={RecipeCreate} />
                    <Route path="/details/:recipeId" exact component={RecipeDetails} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/login" render={() => {
                        return <Login onLogin={onLogin} />
                    }} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/logout" render={() => {
                        console.log('Logged out');
                        // props.history.push('/');
                        return <Logout onLogout={onLogout} />
                    }} />
                </Switch>
            </>

            <Footer />

        </AuthContext.Provider>
    );
}

export default App;
