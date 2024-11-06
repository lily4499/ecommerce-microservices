import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InventoryService() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_INVENTORY_SERVICE_URL}/inventory`)
      .then(response => setInventory(response.data))
      .catch(error => console.error("Error fetching inventory:", error));
  }, []);

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>{item.productName}: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryService;

