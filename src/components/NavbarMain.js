import React, { Component } from 'react';
import '../styles/Navbar.css';

class NavbarMain extends Component {
  render() {
    return (
      <div>
        <ul className='nav-bar'>
          <li onClick={() => this.props.history.push('/')} className='text-link'>Sign Out</li>
          <li onClick= {() => this.props.history.push('/reports')} className='text-link'>Home |</li>
        </ul>
      </div>
    );
  }
}

export default NavbarMain;
