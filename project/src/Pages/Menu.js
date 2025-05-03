import React from 'react';
import './Menu.css';

function Menu() {
  const menuItems = [
    { id: 1, name: 'Plain Fries', price: 380, imgSrc: './images/dummy1.jpg' },
    { id: 2, name: 'Masala Fries', price: 450, imgSrc: './images/dummy2.jpg' },
    { id: 3, name: 'Garlic Mayo Fries', price: 495, imgSrc: './images/dummy3.jpg' },
  ];

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>Starters</h1>
      </header>
      
      <div className="menu-search">
        <input type="text" placeholder="Search menu items" />
        <button>➔</button>
      </div>
      
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.imgSrc} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p>Rs. {item.price}</p>
            <button className="add-btn">+</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
