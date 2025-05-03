import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome To</h1>
        <h2>Foodie's Restaurant</h2>
        <p>Foodie's restaurant offers freshly made authentic desi food for dine-in, delivery, and catering.</p>
        <a href="#order" className="hero-order-btn">ORDER ONLINE</a>
      </div>
    </section>
  );
}

export default Hero;
