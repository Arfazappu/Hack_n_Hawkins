// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
      <span>Fin<span style={{color:"#6B91FC"}}>Com</span></span>

      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <span>Products <i class="fa-solid fa-angle-down"></i></span>
          <div className="dropdown-content">
            <Link to="/bidding">Auction</Link>
            <Link to="/mutual-fund">Mutual Fund</Link>
          </div>
        </div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-right">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
