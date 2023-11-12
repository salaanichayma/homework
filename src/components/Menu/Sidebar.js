
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouseChimney, faMap } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <ul className="Menu">
        <li className={`Menu-item ${isActive('/home') ? 'active-link' : ''}`}>
          <Link to="/home">
            <FontAwesomeIcon icon={faHouseChimney} size='sm' className="Menu-icon" />
            <span className="Menu-title">Home</span>
          </Link>
        </li>
        <li className={`Menu-item ${isActive('/data') ? 'active-link' : ''}`}>
          <Link to="/data">
            <FontAwesomeIcon icon={faMap} size='sm' className="Menu-icon" />
            <span className="Menu-title">Ticketing with journey planner</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
