import React, { useState } from "react";



// Presentational component for item form
const ItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() !== '') {
      addItem(itemName);
      setItemName('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form_input">
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>

      <div className="button">
        <button className="form-button" type="submit">Add Item</button>
      </div>

    </form>
  );
};
export default ItemForm;