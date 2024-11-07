// src/components/UserService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

function UserService() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${config.USER_SERVICE_URL}/users`)
      .then(response => setUsers(response.data))
      .catch(error => {
        console.error("Error fetching users:", error);
        setError("Failed to load users.");
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserService;
