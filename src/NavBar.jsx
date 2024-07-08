import './styles/NavBar.css';
import { NavLink } from 'react-router-dom';
import sneakerIcon from './assets/sneakers.png';
import shoppingCartIcon from './assets/shopping-cart.png';


const NavBar = () => {
    return (
        <nav id='navbar'>
            <NavLink to='/mock-shopping-cart/' id='shop'>
                <img className='icon-sneaker' src={sneakerIcon} />
                <span>SNEMP</span>
            </NavLink>
            <div id='navigation-links'>
                <NavLink to='/mock-shopping-cart/sneakers/' className={({ isActive }) => isActive ? 'active-nav-link' : {} }>
                    <span>Sneakers</span>
                </NavLink>
                <NavLink to='/mock-shopping-cart/cart/' id='cart' className={({ isActive }) => isActive ? 'active-nav-link' : {} }>
                    <img className='icon-shop-cart' src={shoppingCartIcon} />
                    <span>Cart</span>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
