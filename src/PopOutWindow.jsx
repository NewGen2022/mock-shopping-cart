import { useState, useEffect } from 'react';
import './styles/PopOutWindow.css';

const PopOutWindow = () => {
    const [showPopUp, setShowPopUp] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {showPopUp && (
                <div id='pop-out-msg'>
                    <p>Item added to cart!</p>
                </div>
            )}
        </>
    );
};

export default PopOutWindow;
