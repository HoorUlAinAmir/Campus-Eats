import React from 'react';
import image from "./images/barbeque.jpeg" 
import image1 from "./images/sweet.jpeg" 
import image2 from "./images/fast food.jpeg"
import image3 from "./images/chicken makhni.jpg"
import './Special.css';
function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-container">
        <div className="special-card">
          <img className='card' src={image} alt="Barbecue Platter" />
          <h3>Barbecue Platter</h3>
          <a href="#order" className="special-order-btn">Order Now</a>
        </div>
        <div className="special-card">
          <img className='card' src={image3}  alt="Chicken Makhni" />
          <h3>Chicken Makhni</h3>
          <a href="#order" className="special-order-btn">Order Now</a>
        </div>
        <div className="special-card">
          <img  className='card' src={image2} alt="Grilled Fish" />
          <h3>Grilled Fish</h3>
          <a href="#order" className="special-order-btn">Order Now</a>
        </div>
        <div className="special-card">
          <img  className='card' src={image1} s alt="Deserts" />
          <h3>Paneer Tikka</h3>
          <a href="#order" className="special-order-btn">Order Now</a>
        </div>
      </div>
    </section>
  );
}

export default Specials;
