import './styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id='home'>
            <h1>Welcome to SNEAKER EMPIRE</h1>
            <span>
                This is a simple mock shopping cart application built 
                with React for practice React Routes. 
                You can view sneakers, view information about them, 
                add them to your cart and view your cart.
            </span>
            <Link to="/mock-shopping-cart/sneakers/" id='shop-now'>
                <button>Shop now</button>
            </Link>
        </div>
    );
};

export default Home;
