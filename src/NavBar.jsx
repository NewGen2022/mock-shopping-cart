import './styles/NavBar.css';
import { Link } from 'react-router-dom';
import sneakerIcon from './assets/sneakers.png';
import shoppingCartIcon from './assets/shopping-cart.png';


const NavBar = () => {
    return (
        <nav id='navbar'>
            <Link to='/mock-shopping-cart/' id='shop'>
                <img className='icon-sneaker' src={sneakerIcon} />
                <span>SNEAKEMP</span>
            </Link>
            <div id='navigation-links'>
                <Link to='/mock-shopping-cart/sneakers/'>
                    <span>Sneakers</span>
                </Link>
                <Link to='/mock-shopping-cart/cart/' id='cart'>
                    <img className='icon-shop-cart' src={shoppingCartIcon} />
                    <span>Cart</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
