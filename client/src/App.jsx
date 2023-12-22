import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Homepage from './component/screen/Homepage';
import AllCalculators from './component/screen/AllCalculators';
import Footer from './component/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-calculators" element={<AllCalculators />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
