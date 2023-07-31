import React from "react";



// Presentational component for item list
const ItemList = ({ items, removeItem }) => {
  return (

    <table className="table">
      <thead>
          <th>
            Name
          </th>
          <th>
            Actions
          </th>
      </thead>

      <tbody>
        {items.map((item, index) => (
            <tr>
              <td>{item}</td>
              <td><button className="form-button-table" onClick={() => removeItem(index)}>Remove</button></td>
            </tr>
        
        ))}
      </tbody>
    </table>
  );
};
export default ItemList;