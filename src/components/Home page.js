// src/components/Homepage.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Homepage.css'; // Create a new CSS file for Homepage-specific styles
import logo from './assets/logo.png';

const Homepage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="logo-container">
          <img src={logo} alt="Atruserve Logo" className="logo" />
          {/* <h2>ALTRUSERVE</h2> */}
        </div>
        <nav className="navbar">
          <div className="nav-links">
            <NavLink to="/" exact="true" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>
              About Us
            </NavLink>
            <NavLink to="/admin-login" className={({ isActive }) => isActive ? 'active' : ''}>
              Admin Login
            </NavLink>
            <NavLink to="/sponsor-login" className={({ isActive }) => isActive ? 'active' : ''}>
              Sponsor Login
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="header-container">
        <h1>Empowering NGOs for a Better Tomorrow</h1>
        <p>
          We provide a space where organizations can share their missions, achievements, and goals, while sponsors can highlight their contributions to meaningful causes.
        </p>
        <button className="register-button" onClick={handleRegisterClick}>
          Register
        </button>
      </main>
    </div>
  );
};

export default Homepage;
