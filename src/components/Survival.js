import React, { Component } from 'react'
import Home from "./home/Home"
import ApplicationViews from "./ApplicationViews"
import './Survival.css'
import NavBar from "./nav/NavBar"

class Survival extends Component {

    state = {
        loggedIn: false,
    }

    handleLoginChange = () =>
    this.setState({loggedIn: true})

    handleLogoutChange = () => {
        this.setState({loggedIn: false}); localStorage.clear()
    }

    render() {
        return (
            <>
            <NavBar
            loggedIn={this.state.loggedIn}
            handleLogoutChange={this.handleLogoutChange}
            />
            <ApplicationViews 
            handleLoginChange={this.handleLoginChange}
            />
          </>
     
	
        );
    }
}

export default Survival