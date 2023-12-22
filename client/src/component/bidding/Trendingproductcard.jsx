// TrendingProductCard.jsx

import React, { useState } from 'react';
import BiddingModal from './BiddingModal';

const TrendingProductCard = ({ title, image, description, initialPrice, minBid, maxBid }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBid, setCurrentBid] = useState(initialPrice);

  const handleBidNow = () => {
    setIsModalOpen(true);
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.cardImage} />
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
      <p>Initial Price: ₹{initialPrice}</p>
      <p>Current Bid: ₹{currentBid}</p>
      <p>Minimum Bid: ₹{minBid}</p>
      <p>Maximum Bid: ₹{maxBid}</p>
      <button onClick={handleBidNow} className='bid-btn'>Bid Now</button>

      {isModalOpen && (
        <BiddingModal
          product={{ title, image, initialPrice, minBid, maxBid }}
          currentBid={currentBid}
          setCurrentBid={setCurrentBid}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    textAlign: 'center',
    maxWidth: '200px',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
};

export default TrendingProductCard;