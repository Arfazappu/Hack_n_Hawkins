import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Homepage from './component/screen/Homepage';
import AllCalculators from './component/screen/AllCalculators';
import Footer from './component/Footer';
import BiddingPage from './component/bidding/BiddingPage';
import './App.css';
import RegisterProduct from './component/bidding/RegisterProduct'
import Home from './component/mutual/Home';
import Profile from './component/mutual/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-calculators" element={<AllCalculators />} />
        <Route path='/bidding' element={<BiddingPage />}/>
        <Route path='/register' element={<RegisterProduct />}/>

        <Route path='/mutual-fund' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
