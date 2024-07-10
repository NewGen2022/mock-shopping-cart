import './styles/Cart.css';
import PropTypes from 'prop-types';

const Cart = ({ items }) => {
    console.log(items);

    const finalPrice = () => {
        return items.reduce((accumulator, currentValue) => 
            accumulator + parseInt(currentValue.price) * currentValue.numberOfItem, 
        0);
    };

    return (
        <div id='cart-container'>
            <>
                {items.length > 0 ? (
                    <>
                        {items.map((item, index) => (
                            <div key={index} className='cart-item'>
                                <img src={item.imageUrl} alt={item.name} />
                                <div className='cart-item-details'>
                                    <div className='item-name'>{item.name}</div>
                                    <div className='item-price'>{item.price}</div>
                                    <div className='item-quantity'>Quantity: {item.numberOfItem}</div>
                                    <div className='item-over-all'>Over All: {item.numberOfItem * parseInt(item.price)}$</div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <h1>Your cart is empty.</h1>
                )}
                {items.length > 0 && (
                    <>
                        <div id='final-price'>Final Price: {finalPrice()}$</div>
                    </>
                )}
            </>
        </div>
    );
};

Cart.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Cart;