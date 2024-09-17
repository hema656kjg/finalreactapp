import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Profile = () => {
  return (
    <div className="main-content">
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="row g-0">
            <div className="col-md-4">
              {/* Placeholder for Sponsor Image */}
              <img 
                src="https://via.placeholder.com/150" 
                alt="Sponsor Logo" 
                className="img-fluid rounded-start" 
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Sponsor Name</h2>
                <p className="card-text">
                  <strong>About the Sponsor:</strong> This section includes details about the sponsor. The sponsor is a well-known organization that supports various causes, contributing to the betterment of the community.
                </p>
                <p className="card-text">
                  <strong>Mission:</strong> To support initiatives that create a positive impact in society.
                </p>
                <p className="card-text">
                  <strong>Contact:</strong> info@sponsor.com | +123 456 7890
                </p>
                <a href="https://www.sponsorwebsite.com" className="btn btn-primary">Visit Sponsor Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
