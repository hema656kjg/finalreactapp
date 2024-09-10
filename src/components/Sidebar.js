// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faDonate, faFileInvoiceDollar, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
//       <div className="sidebar-header">
//         {isExpanded && <img src="/path/to/altruserve.png" alt="AltruServe Logo" className="logo" />}
//         <div className="hamburger" onClick={toggleSidebar}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

//       <ul>
//         <li className="tooltip" title="Profile">
//           <Link to="/profile">
//             <FontAwesomeIcon icon={faUser} className="icon" />
//             {isExpanded && <span className="text">Profile</span>}
//           </Link>
//         </li>
//         <li className="tooltip" title="Donate">
//           <Link to="/donate">
//             <FontAwesomeIcon icon={faDonate} className="icon" />
//             {isExpanded && <span className="text">Donate</span>}
//           </Link>
//         </li>
//         <li className="tooltip" title="Transactions">
//           <Link to="/transactions">
//             <FontAwesomeIcon icon={faFileInvoiceDollar} className="icon" />
//             {isExpanded && <span className="text">Transactions</span>}
//           </Link>
//         </li>
//         <li className="tooltip" title="View NGOs">
//           <Link to="/viewngos">
//             <FontAwesomeIcon icon={faHandsHelping} className="icon" />
//             {isExpanded && <span className="text">View NGOs</span>}
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDonate, faFileInvoiceDollar, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-header">
        {isExpanded && <img src="/path/to/altruserve.png" alt="AltruServe Logo" className="logo" />}
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
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'Donate' : ''}>
          <Link to="/donate">
            <FontAwesomeIcon icon={faDonate} className="icon" />
            {isExpanded && <span className="text">Donate</span>}
          </Link>
        </li>
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'Transactions' : ''}>
          <Link to="/transactions">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="icon" />
            {isExpanded && <span className="text">Transactions</span>}
          </Link>
        </li>
        <li className={`sidebar-item ${!isExpanded ? 'tooltip' : ''}`} title={!isExpanded ? 'View NGOs' : ''}>
          <Link to="/viewngos">
            <FontAwesomeIcon icon={faHandsHelping} className="icon" />
            {isExpanded && <span className="text">View NGOs</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
