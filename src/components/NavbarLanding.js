import React, { Component } from 'react';
import '../styles/Navbar.css';

class NavbarLanding extends Component {
  render() {
    return (
      <div>
        <ul className='nav-bar'>
          <li
            onClick={() => this.props.history.push('/reports')}
            className='text-link'
          >
            Demo
          </li>
          <li
            onClick={() => this.props.history.push('/sign-in')}
            className='text-link'
          >
            Sign In |
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarLanding;
