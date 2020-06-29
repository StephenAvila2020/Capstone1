import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
  state= {
    loggedIn: false,
  }

  render(){

    return (
      
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">News</Link></li>
            <li><Link className="nav-link" to="/users">My Profile</Link></li>
            {!this.props.loggedIn ?
            <li><Link className="nav-link" to="/login">Login</Link></li>
            :
            <li className="nav-link" onClick={() => {this.props.handleLogoutChange()}}> <Link to="/login"> Logout</Link></li>
          
          
          }
            <li>SWF</li>
            <li>Around the Campfire</li>
          </ul>
        </nav>
        
      
    )
  }
}

export default NavBar;