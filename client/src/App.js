import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { RouteGuards } from './pages/Routes';
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import RecipeCatalog from './pages/Recipe/RecipeCatalog';
import RecipeDetails from './pages/Recipe/Details';
import RecipeCreate from './pages/Recipe/Create';
import Edit from './pages/Recipe/Edit';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Logout from './components/Logout';
import Contact from './pages/Contact';
import MyRecipes from './pages/Recipe/MyRecipes';
import Chefs from './pages/Chefs/Catalog';
import ChefRecipes from './pages/Chefs/ChefRecipes'
import ErrorBoundary from './components/Common/ErrorBoundary';

function App() {

    return (
        <ErrorBoundary>
            <AuthProvider>
                <NotificationProvider>
                    <div className="app-container">
                        <NavbarMenu />

                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/recipes/catalog" element={<RecipeCatalog />} />
                                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
                                <Route path="/chefs" element={<Chefs />} />
                                <Route path="/chefs/:chefId" element={<ChefRecipes />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path="*" element={<ErrorPage />} />


                                <Route element={<RouteGuards />}>
                                    <Route path="/recipes/my-recipes" element={<MyRecipes />} />
                                    <Route path="/recipes/create" element={<RecipeCreate />} />
                                    <Route path="/recipes/edit/:recipeId" element={<Edit />} />
                                </Route>
                            </Routes>

                        <Footer />

                    </div>
                </NotificationProvider>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
