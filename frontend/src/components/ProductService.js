// src/components/ProductService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

function ProductService() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${config.PRODUCT_SERVICE_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(error => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductService;
