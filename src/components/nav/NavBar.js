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
          <header>The Survival Guide</header>
          <ul className="container">
            <li><Link className="nav-link" to="/">News</Link></li>
            <li><Link className="nav-link" to="/users">My Profile</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/groups">Survive With Friends</Link></li>
            <li><Link className="nav-link" to="/achievements">Achievements</Link></li>
          </ul>
        </nav>
        
      
    )
  }
}

export default NavBar;