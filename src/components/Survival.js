import React, { Component } from 'react'
import Home from "./home/Home"
import ApplicationViews from "./ApplicationViews"
import './Survival.css'
import NavBar from "./nav/NavBar"

class Survival extends Component {
    render() {
        return (
            <>
            <NavBar />
            <ApplicationViews />
          </>
     
	
        );
    }
}

export default Survival