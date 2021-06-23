import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function NavbarLanding() {
  return (
        <div>
          <ul id="nav-bar">
            <li>
              <Link to="/reports">Demo</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </div>
  );
}

export default NavbarLanding;
