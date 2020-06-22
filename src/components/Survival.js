import React, { Component } from 'react'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import './Survival.css'

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