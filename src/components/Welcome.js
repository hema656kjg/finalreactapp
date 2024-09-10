// src/components/Welcome.js
import React from 'react';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to the Sponsor Portal</h1>
      <p>This is a portal where sponsors can manage donations, view transactions, and explore NGOs.</p>
      
      {/* Sponsor profile details */}
      <div className="welcome-details">
        <h2>Sponsor Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Total Donations: $5000</p>
      </div>
    </div>
  );
};

export default Welcome;
