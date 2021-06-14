import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarMain() {
  return (
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
  )
}

export default NavbarMain;