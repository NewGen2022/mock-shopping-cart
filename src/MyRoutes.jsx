import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/Home.css';
import Home from './Home';
import Sneakers from './Sneakers';
import SneakerDetails from './SneakerDetails';
import Cart from './Cart';

const MyRoutes = ({ cartItems, setCartItems }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/mock-shopping-cart/') {
            document.body.classList.add('home-background');
        } else {
            document.body.classList.remove('home-background');
        }
    }, [location.pathname]);

    return (
        <Routes>
            <Route path='/mock-shopping-cart/' element={ <Home /> } />
            <Route path='/mock-shopping-cart/sneakers/' element={ <Sneakers /> } />
            <Route path='/mock-shopping-cart/sneakers/:id' element={ <SneakerDetails setCartItems={setCartItems} /> } />
            <Route path='/mock-shopping-cart/cart/' element={ <Cart items={cartItems} /> } />
        </Routes>
    );
};

MyRoutes.propTypes = {
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
};

export default MyRoutes;
