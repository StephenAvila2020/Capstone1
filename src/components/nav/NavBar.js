import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">News</Link></li>
            <li><Link className="nav-link" to="/users">My Profile</Link></li>
            <li>SWF</li>
            <li>Versus</li>
            <li>New to the Fog</li>
          </ul>
        </nav>
        
      
    )
  }
}

export default NavBar;