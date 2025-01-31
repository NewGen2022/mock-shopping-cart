import { useState, useEffect } from 'react';
import SneakerCard from './SneakerCard';
import './styles/Sneakers.css';

const Sneakers = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/NewGen2022/mock-shopping-cart/main/public/data.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setShoes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    if (loading) return <div id='loading'>Loading...</div>;
    if (error) return <div id='loading'>Error: {error}</div>;

    return (
        <div id='sneakers'>
            {shoes.map(shoe => (
                <div key={shoe.id} className='shoe-card'>
                    <SneakerCard shoe={shoe} />
                </div>
            ))}
        </div>
    );
};

export default Sneakers;
