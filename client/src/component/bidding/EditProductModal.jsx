import React, { useState } from 'react';

const EditProductModal = ({ product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState({
    title: product.title,
    description: product.description,
    minprice: product.minprice,
    maxprice: product.maxprice,
    timer: product.timer || 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // You can implement logic to save the edited product, such as an API call or state update
    onSave(editedProduct);

    // Close the modal
    onClose();
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Edit Product</h2>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={editedProduct.title}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
          style={textareaStyle}
        />

        <label>Min Price:</label>
        <input
          type="text"
          name="minprice"
          value={editedProduct.minprice}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label>Max Price:</label>
        <input
          type="text"
          name="maxprice"
          value={editedProduct.maxprice}
          onChange={handleInputChange}
          style={inputStyle}
        />

<label>Timer (minutes):</label>
<input
  type="number"
  name="timer"
  value={editedProduct.timer}  
  onChange={handleInputChange}
  style={inputStyle}
/>

        <div style={buttonContainer}>
          <button onClick={handleSave} style={saveButtonStyle}>
            Save
          </button>
          <button onClick={onClose} style={closeButtonStyle}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  width: '400px', // Adjust the width as needed
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
  boxSizing: 'border-box',
  minHeight: '100px',
  resize:'none',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
};

const saveButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '45%',
  fontFamily: 'Montserrat, sans-serif',
};

const closeButtonStyle = {
  backgroundColor: '#ccc',
  color: 'black',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '45%',
  fontFamily: 'Montserrat, sans-serif',
};

export default EditProductModal;