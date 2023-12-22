
import React from 'react';

const Cards = () => {
  return (
    <section className="cards">
       <div className="card">
        <h2>Auction</h2>
        <p>Participate in local product bidding events.</p>
        <a href="/bidding">Get Started</a>
      </div>
      <div className="card">
        <h2>Mutual Fund Simulation</h2>
        <p>Explore and simulate mutual fund investments.</p>
        <a href="/home">Learn More</a>
      </div>
     
     <div className="grid-background" style={{position:'absolute', zIndex:'0', top:'-50%'}}>
      <img src="/src/assets/grid-background.svg" alt="" />
     </div>
    </section>
  );
};

export default Cards;
