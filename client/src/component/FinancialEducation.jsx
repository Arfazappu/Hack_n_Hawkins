// src/components/FinancialEducation.jsx

import React from 'react';


const FinancialEducation = () => {
  return (
    <section className="financial-education">
      <div className="education-item">
        <h2>Articles</h2>
        <div className="article">
          <h3>Top 5 Budgeting Tips</h3>
          <p>Learn effective budgeting strategies to manage your finances wisely.</p>
          <a href="/article/budgeting-tips">Read more</a>
        </div>
        {/* Add more articles as needed */}
      </div>
      <div className="education-item">
        <h2>Videos</h2>
        <div className="video">
          <h3>Investing 101</h3>
          <p>Watch this video to understand the basics of investing in the financial market.</p>
          <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
            Watch video
          </a>
        </div>
        {/* Add more videos as needed */}
      </div>
      <div className="education-item">
        <h2>Financial Tips</h2>
        <div className="tips">
          <h3>Smart Saving Strategies</h3>
          <p>Explore tips on saving money and building a strong financial foundation.</p>
          <a href="/tips/saving-strategies">View tips</a>
        </div>
        {/* Add more tips as needed */}
      </div>

      <div className="grid-background" style={{position:'absolute', zIndex:'0', top:'-50%'}}>
      <img src="/src/assets/grid-background.svg" alt="" />
     </div>
    </section>
  );
};

export default FinancialEducation;
