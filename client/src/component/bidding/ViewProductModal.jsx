import React from 'react';

const ViewProductModal = ({ product, onClose, bidPrice, buyer }) => {
  return (
    <div style={modalContainerStyle}>
      <div style={modalStyle}>
        <h2 style={modalHeaderStyle}>Product Details</h2>
        <div style={detailsContainerStyle}>
          <div style={detailItemStyle}>
            <label style={labelStyle}>Title:</label>
            <p>{product.title}</p>
          </div>
          <div style={detailItemStyle}>
            <label style={labelStyle}>Description:</label>
            <p>{product.description}</p>
          </div>
          <div style={detailItemStyle}>
            <label style={labelStyle}>Min Price:</label>
            <p>${product.minprice}</p>
          </div>
          <div style={detailItemStyle}>
            <label style={labelStyle}>Max Price:</label>
            <p>${product.maxprice}</p>
          </div>
          <div style={detailItemStyle}>
            <label style={labelStyle}>Bid Price:</label>
            <p>${bidPrice}</p>
          </div>
          <div style={detailItemStyle}>
            <label style={labelStyle}>Buyer:</label>
            <p>{buyer}</p>
          </div>
        </div>
        <button type="button" onClick={onClose} style={closeButtonStyle}>
          Close
        </button>
      </div>
    </div>
  );
};

// Styles for the ViewProductModal component
const modalContainerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  width: '40%',
};

const modalHeaderStyle = {
  fontSize: '1.5rem',
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  fontWeight:'600',
  margin: '10px 0',
};

const detailsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const detailItemStyle = {
  display: 'flex',
  alignItems:'center',
  marginBottom: '15px',
  gap:'10px'
};

const closeButtonStyle = {
  backgroundColor: '#ccc',
  color: 'black',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  marginTop: '20px',
  fontFamily: 'Montserrat, sans-serif',
};

export default ViewProductModal;