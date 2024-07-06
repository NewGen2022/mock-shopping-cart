import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import './styles/Home.css';

const MyRoutes = () => {
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
            <Route path='/mock-shopping-cart/sneakers/' element={ <h1>Sneakers</h1> } />
            <Route path='/mock-shopping-cart/cart/' element={ <h1>Cart</h1> } />
        </Routes>
    );
};

export default MyRoutes;
