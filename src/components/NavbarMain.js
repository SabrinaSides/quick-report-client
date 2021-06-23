import React, { Component } from 'react';
import '../styles/Navbar.css';

class NavbarMain extends Component {
  render() {
    return (
      <div>
        <ul className='nav-bar'>
          <li onClick={() => this.props.history.push('/')}>Sign Out</li>
        </ul>
      </div>
    );
  }
}

export default NavbarMain;
