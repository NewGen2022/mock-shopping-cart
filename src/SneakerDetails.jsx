import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './styles/SneakerDetails.css';

const SneakerDetails = () => {
    const location = useLocation();
    const shoe = location.state || false;

    const [numberOfItem, setNumberOfItem] = useState(1);

    const handlePlusItem = () => {
        setNumberOfItem(prevState => prevState + 1);
    };

    const handleMinusItem = () => {
        setNumberOfItem(prevState => (prevState > 1 ? prevState - 1 : 1));
    };

    return (
        <div className='shoe-details'>
            {shoe ? (
                <>
                    <img src={shoe.imageUrl} />
                    <div className='details'>
                        <div className='sneaker-name'>{shoe.name}</div>
                        <div className='sneaker-price'>{shoe.price}</div>
                        <div className='sneaker-description'>{shoe.description}</div>
                        <div className='number-of-item-container'>
                            <button onClick={handleMinusItem}>-</button>
                            <div className='number-of-item'>{numberOfItem}</div>
                            <button onClick={handlePlusItem}>+</button>
                        </div>
                        <button className='add-to-cart'>+ Add to cart</button>
                    </div>
                </>
            ) : (
                <p>No sneaker data available.</p>
            )}
        </div>
    );
};

export default SneakerDetails;
