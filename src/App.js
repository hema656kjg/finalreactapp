// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Donate from './components/Donate';
import Transactions from './components/Transactions';
import ViewNGOs from './components/ViewNGOs';
import Welcome from './components/Welcome';
import './App.css';
import DonatePage from './components/Donate';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
          
        <Route path="/donate/:upiId" element={<DonatePage />} />
            {/* Welcome Page (default route) */}
            <Route path="/" element={<Welcome />} />

            {/* Other routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/viewngos" element={<ViewNGOs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
