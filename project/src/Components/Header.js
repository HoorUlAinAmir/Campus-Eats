import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Foodie's Restaurant</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Link to="/order" className="order-online">ORDER ONLINE</Link>
      <Link to="/order" className="order-online">LOGIN</Link>
    </header>
  );
}

export default Header;
