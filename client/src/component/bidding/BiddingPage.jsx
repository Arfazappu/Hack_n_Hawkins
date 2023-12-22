import React, { useState } from 'react';
import TrendingProductCard from './Trendingproductcard.jsx';
import './AfterLogin.css';
import { Link } from 'react-router-dom';

const BiddingPage = () => {
  const logoUrl = 'src/assets/logo.png'; // Adjust the path to your logo
  const username = 'JohnDoe'; // Replace with the actual username
  const userIconPath = 'path/to/user-icon.png'; // Replace with the path to your user icon

  const [availableBalance, setAvailableBalance] = useState(100000);

  const handleHome = () => {
    console.log('Home button clicked');
  };

  const handleProducts = () => {
    console.log('Products button clicked');
  };

  const handleExplore = () => {
    console.log('Explore button clicked');
  };

  return (
    <div>
      {/* Header */}
     

     
      {/* Hero Section */}
      <section className="hero">
        <img src="src/assets/gl_hero.jpg" alt="" />
        <div className="hero-title">
        <h1>Bid To Mid</h1>
        {/* <button onClick={handleExplore} className="hero-button">
          Register your Product
        </button> */}
        <Link to='/register'>
        <button onClick={handleExplore} className="hero-button">
          Register your Product
        </button>
        </Link>
        
        </div>
        
      </section>

      {/* Trending Products */}
      <section className="trendingProducts">
        <h2>Trending available items</h2>
        <div className="cardContainer">
          <TrendingProductCard
            title="Red Chilli"
            image="https://images.unsplash.com/photo-1642405892986-71a7c4496c29?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            description="Imported"
            initialPrice={25}
            minBid={30}
            maxBid={1000}
          />
          <TrendingProductCard
            title="Strawberry"
            image="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            description="London imported"
            initialPrice={250}
  minBid={300}
  maxBid={3000}
          />
          <TrendingProductCard
            title="Thailand banana"
            image="https://images.unsplash.com/photo-1668968554885-c08ad72c2133?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            description="Seasional heaven"
            initialPrice={100}
  minBid={150}
  maxBid={1000}
          />
          <TrendingProductCard
            title="Pumkin"
            image="https://images.unsplash.com/photo-1665267746599-7476a9231667?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            description="Good quality"
            initialPrice={200}
  minBid={250}
  maxBid={2000}
          />
        
         
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default BiddingPage;