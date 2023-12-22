// src/components/Hero.jsx

import React from 'react';

const Hero = ({ title, subtitle, cta }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-button">{cta}</button>
      </div>
      <div className="image-container">
        <img src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
    </section>
  );
};

export default Hero;
