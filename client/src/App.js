import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';
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

    return (
        <AuthProvider>
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

        </AuthProvider>
    );
}

export default App;
