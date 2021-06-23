import React, {Component} from 'react';
import '../styles/Navbar.css';

class NavbarMain extends Component {
  render(){
  return (
        <div>
          <ul id="nav-bar">
            <li onClick={() => this.props.history.push('/')}>
              Sign Out
            </li>
            <li onClick={() => this.props.history.push('/reports')}>
              Report List
            </li>
          </ul>
          </div>
  )
  }
}

export default NavbarMain;