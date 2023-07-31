import React, { useState } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';


// Container component
const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  
  const addItem = (item) => {
    setItems([...items, item]);
  };
  
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  
  return (
    <div className='shoppingcart'>
      <h1>Shopping Cart</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
};
export default ShoppingCart;