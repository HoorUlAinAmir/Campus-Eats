import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resturantselector.css';
import restaurant1Image from './images/R1.jpeg'; // Assuming you’ve uploaded images
import restaurant2Image from './images/r2.jpeg';

function RestaurantSelector() {
    const navigate = useNavigate();

    const handleSelect = (restaurant) => {
        navigate(`/${restaurant}-menu`);
    };

    return (
        <div className="restaurant-selector">
            <h2>Select a Restaurant:</h2>
            <div className="button-container">
                <div className="restaurant-option" onClick={() => handleSelect('restaurant1')}>
                    <img src={restaurant1Image} alt="Restaurant 1" className="restaurant-image" />
                    <button className="restaurant-button">Restaurant 1</button>
                </div>
                <div className="restaurant-option" onClick={() => handleSelect('restaurant2')}>
                    <img src={restaurant2Image} alt="Restaurant 2" className="restaurant-image" />
                    <button className="restaurant-button">Restaurant 2</button>
                </div>
            </div>
        </div>
    );
}

export default RestaurantSelector;
