import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { RecipeProvider } from './contexts/RecipeContext';
import Header from './components/Header';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import ErrorPage from './pages/Error';
import RecipeCatalog from './pages/Recipe/Catalog';
import RecipeDetails from './pages/Recipe/Details';
import RecipeCreate from './pages/Recipe/Create';
import Edit from './pages/Recipe/Edit';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Logout from './components/Logout';
import Contact from './pages/Contact';
import MyRecipes from './pages/User/MyRecipes';


function App() {

    return (
        <AuthProvider>
            <Header />

            <Menu />

            <Navbar />

            <RecipeProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/recipes/catalog" element={<RecipeCatalog />} />
                    <Route path="/recipes/my-recipes" element={<MyRecipes />} />
                    <Route path="/recipes/create" element={<RecipeCreate />} />
                    <Route path="/recipes/edit/:recipeId" element={<Edit />} />
                    <Route path="/recipes/details/:recipeId" element={<RecipeDetails />} />
                    <Route path="/chefs" element={<RecipeCreate />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </RecipeProvider>

            <Footer />

        </AuthProvider>
    );
}

export default App;
