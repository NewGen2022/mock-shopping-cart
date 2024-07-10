import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/SneakerDetails.css';
import PopOutWindow from './PopOutWindow';

const SneakerDetails = ({ setCartItems }) => {
    const location = useLocation();
    const shoe = location.state || false;

    const [numberOfItem, setNumberOfItem] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const handlePlusItem = () => {
        setNumberOfItem(prevState => prevState + 1);
    };

    const handleMinusItem = () => {
        setNumberOfItem(prevState => (prevState > 1 ? prevState - 1 : 1));
    };

    const addToCart = () => {
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === shoe.id);
            setAddedToCart(true);
            if (itemIndex > -1) {
                const newItems = [...prevItems];
                newItems[itemIndex].numberOfItem += numberOfItem;

                return newItems;
            } else {
                return [...prevItems, { ...shoe, numberOfItem }];
            }
        });
    };

    return (
        <div className='shoe-details'>
            {shoe ? (
                <>
                    <img src={shoe.imageUrl} alt={shoe.name} />
                    <div className='details'>
                        <div className='sneaker-name'>{shoe.name}</div>
                        <div className='sneaker-price'>{shoe.price}</div>
                        <div className='sneaker-description'>{shoe.description}</div>
                        <div className='number-of-item-container'>
                            <button onClick={handleMinusItem}>-</button>
                            <div className='number-of-item'>{numberOfItem}</div>
                            <button onClick={handlePlusItem}>+</button>
                        </div>
                        <button className='add-to-cart' onClick={addToCart}>+ Add to cart</button>
                        {addedToCart && <PopOutWindow />}
                    </div>
                </>
            ) : (
                <p>No sneaker data available.</p>
            )}
        </div>
    );
};

SneakerDetails.propTypes = {
    setCartItems: PropTypes.func.isRequired,
};

export default SneakerDetails;