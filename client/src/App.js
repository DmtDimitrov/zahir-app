// import { useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

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
import useLocalStorage from './hooks/useLocalStorage';

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: '',
};

function App() {

    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <Header />

            <Menu />

            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/recipes/catalog" element={<RecipeCatalog />} />
                    <Route path="/recipes/create" element={<RecipeCreate />} />
                    <Route path="/chefs" element={<RecipeCreate />} />
                    <Route path="/details/:recipeId" element={<RecipeDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </>

            <Footer />

        </AuthContext.Provider>
    );
}

export default App;
