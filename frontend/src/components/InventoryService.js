// src/components/InventoryService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

function InventoryService() {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${config.INVENTORY_SERVICE_URL}/inventory`)
      .then(response => setInventory(response.data))
      .catch(error => {
        console.error("Error fetching inventory:", error);
        setError("Failed to load inventory data");
      });
  }, []);

  return (
    <div>
      <h2>Inventory List</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>{item.productName}: {item.quantity}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InventoryService;

