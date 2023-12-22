import React, { useState } from 'react';
import EditProductModal from './EditProductModal';
import ViewProductModal from './ViewProductModal';

function ManageCard({ title, description, minprice, maxprice, imageUrl, timer }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openViewModal = () => {
    // For simplicity, set dummy bid details
    const bidPrice = 150;
    const buyer = 'John Doe';
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const saveEditedProduct = (editedProduct) => {
    // Implement logic to save the edited product, such as an API call or state update
    console.log('Edited product:', editedProduct);
    // For simplicity, you can log the edited product to the console
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={title} style={cardImageStyle} />
      <div style={cardContentStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          Min Price: <span style={{ fontWeight: 'bold' }}>${minprice}</span>
        </p>
        <p>
          Max Price: <span style={{ fontWeight: 'bold' }}>${maxprice}</span>
        </p>
        <p>
          Timer: <span style={{ fontWeight: 'bold' }}>{timer}</span> min
        </p>
      </div>
      <div style={cardButtonsStyle}>
        <button style={editButtonStyle} onClick={openEditModal}>
          Edit
        </button>
        <button style={viewButtonStyle} onClick={openViewModal}>
          View
        </button>
      </div>

      {isEditModalOpen && (
        <EditProductModal
          product={{ title, description, minprice, maxprice }}
          onClose={closeEditModal}
          onSave={saveEditedProduct}
        />
      )}

      {isViewModalOpen && (
        <ViewProductModal
          product={{ title, description, minprice, maxprice }}
          onClose={closeViewModal}
          bidPrice={95} // Replace with actual bid details
          buyer="John Doe" // Replace with actual buyer details
        />
      )}
    </div>
  );
}

// Styles for the Card component
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  margin: '10px',
  padding: '10px',
  minWidth: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  ':hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

const cardImageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const cardContentStyle = {
  marginTop: '10px',
};

const cardButtonsStyle = {
  display: 'flex',
  justifyContent: 'start',
  gap: '10px',
  marginTop: '10px',
};

const editButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '8px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'Montserrat, sans-serif',
};

const viewButtonStyle = {
  backgroundColor: '#2196F3',
  color: 'white',
  padding: '8px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'Montserrat, sans-serif',
};

export default ManageCard;