import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { CartProvider } from './context/CartContext';

// PAGES
import Home from './pages/Home';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import FindUs from './pages/FindUs';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';


// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/Store/ItemDetailContainer/ItemDetailContainer';
import ShoppingCartSuccess from './components/Store/ShoppingCartSuccess/ShoppingCartSuccess';

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route index element={ <Home /> }/>
                    <Route path="shop" element={<Shop /> }/>
                    <Route path="findus" element={<FindUs /> }/>
                    <Route path="about" element={<About /> }/>
                    <Route path="signin" element={<SignIn /> }/>
                    <Route path="profile" element={<Profile /> }/>
                    <Route path=":category" element={ <Shop /> }/>
                    <Route path="details/:id" element={ <ItemDetailContainer /> }/>
                    <Route path="success/:id" element={ <ShoppingCartSuccess /> }/>
                    <Route path="*" element={ <NotFound /> }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;