import { useState } from 'react';
import './styles/App.css';
import NavBar from './NavBar';
import MyRoutes from './MyRoutes';

function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <NavBar />
            <MyRoutes cartItems={cartItems} setCartItems={setCartItems} />
        </>
    );
}

export default App;
