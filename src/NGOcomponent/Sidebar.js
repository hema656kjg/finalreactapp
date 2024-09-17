import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPiggyBank, faMoneyBillWave, faFileInvoiceDollar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-header">
        {isExpanded && <img src="/path/to/ngo-logo.png" alt="NGO Logo" className="logo" />}
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul>
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'Profile' : ''}>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} className="icon" />
            {isExpanded && <span className="text">Profile</span>}
          </Link>
        </li>
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'Deposits' : ''}>
          <Link to="/deposits">
            <FontAwesomeIcon icon={faPiggyBank} className="icon" />
            {isExpanded && <span className="text">Deposits</span>}
          </Link>
        </li>
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'Expenditure' : ''}>
          <Link to="/expenditure">
            <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
            {isExpanded && <span className="text">Expenditure</span>}
          </Link>
        </li>
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'Transactions' : ''}>
          <Link to="/transactions">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="icon" />
            {isExpanded && <span className="text">Transactions</span>}
          </Link>
        </li>
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'Sign Out' : ''}>
          <Link to="/signout">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            {isExpanded && <span className="text">Sign Out</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
