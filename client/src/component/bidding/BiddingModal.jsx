// BiddingModal.jsx

import React, { useState, useEffect } from 'react';
import './BiddingModal.css';

const BiddingModal = ({ product, currentBid, setCurrentBid, onClose }) => {
  const [timer, setTimer] = useState(30); // 300 seconds = 5 minutes
  const [isPurchaseAvailable, setIsPurchaseAvailable] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setIsPurchaseAvailable(true);
    }
  }, [timer]);

  const handleBidChange = (amount) => {
    setCurrentBid(amount);
  };

  const handlePlaceBid = () => {
    // Handle placing a bid, e.g., update backend, etc.
    console.log('Placing bid:', currentBid);
  };

  return (
    <div className="bidding-modal">
      <div className="modal-content">
        <img src={product.image} alt={product.title} className="modal-image" />
        <div className="modal-details">
          <h2>{product.title}</h2>
          <p>
            <strong>Minimum Bid:</strong> ₹{product.minBid}
          </p>
          <p>
            <strong>Maximum Bid:</strong> ₹{product.maxBid}
          </p>
          <p>
            <strong>Current Bid:</strong> ₹{currentBid}
          </p>
          <div className="timer">
            <strong>Time Remaining:</strong> {Math.floor(timer / 60)}:{timer % 60}
          </div>
          {isPurchaseAvailable ? (
            <button onClick={onClose}>Purchase</button>
          ) : (
            <div className="bid-controls">
              <input
                type="number"
                value={currentBid}
                onChange={(e) => handleBidChange(e.target.value)}
                min={product.minBid}
                max={product.maxBid}
              />
              <button onClick={handlePlaceBid} disabled={timer === 0}>
                Place Bid
              </button>
            </div>
          )}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BiddingModal;