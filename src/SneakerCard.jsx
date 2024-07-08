import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SneakerCard = ({ shoe }) => {
    return (
        <Link to={`/mock-shopping-cart/sneakers/${shoe.id}`} className='shoe-link'>
            <h2>{shoe.name}</h2>
            <img src={shoe.imageUrl} alt={shoe.name} />
            <p>{shoe.price}</p>
        </Link>
    );
};

SneakerCard.propTypes = {
    shoe: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default SneakerCard;
