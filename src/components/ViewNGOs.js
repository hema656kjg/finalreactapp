import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './viewngos.css';

// Import the JSON data
import ngosData from './ngos.json'; // Adjust the path according to your folder structure

const ViewNGOs = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    // Set NGOs data from JSON file
    setNgos(ngosData);
  }, []);

  return (
    <div className="ngos-list">
      {ngos.map((ngo) => (
        <div key={ngo.id} className="ngo-card">
          <h2>{ngo.name}</h2>
          <p>{ngo.description}</p>
          <p><strong>Since:</strong> {ngo.since}</p>
          <p><strong>Motto:</strong> {ngo.motto}</p>
          <div className="ngo-actions">
            <button className="view-details">View Details</button>
            {/* Use Link for dynamic routing to donate page */}
            <Link to={`/donate/${ngo.upiId}`}>
              <button className="donate">Donate</button>
            </Link>
            <a href={ngo.website} target="_blank" rel="noopener noreferrer" className="visit-site">Visit Site</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewNGOs;
