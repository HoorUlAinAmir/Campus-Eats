// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Specials from './Components/Special';
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import RestaurantSelector from './Components/Resturantselector';
import Order from './Pages/order';     // Added import for Order page
import Contact from './Pages/contact'; // Added import for Contact page

function App() {  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Specials />
              <RestaurantSelector /> {/* Include the restaurant selector */}
            </>
          } />
          <Route path="/restaurant1-menu" element={<Menu restaurant="R1" />} />
          <Route path="/restaurant2-menu" element={<Menu restaurant="R2" />} />
          <Route path="/home" element={
            <>
              <Hero />
              <Specials />
              <RestaurantSelector />
            </>
          } />

          {/* Additional Routes for Header Links */}
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
