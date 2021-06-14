import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-wrapper">
      {window.location.pathname === '/' ? (
        <div>
          <ul id="nav-bar">
            <li>
              <Link to="/report-list">Demo</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul id="nav-bar">
            <li>
              <Link to="/">Sign Out</Link>
            </li>
            <li>
              <Link to="/report-list">Report List</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
