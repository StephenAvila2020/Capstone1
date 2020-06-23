// import { Route } from 'react-router-dom'
import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import UserCard from './users/UserCard'
import Login from './auth/Login'
import UserForm from './users/UserForm'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null



    render() {
        return ( <
            React.Fragment >
            <
            Route path = "/login"
            component = { Login }
            />

            <
            Route exact path = "/"
            render = {
                (props) => {
                    return <Home {...props }
                    />
                }
            }
            /> <
            Route path = "/users/new"
            render = {
                (props) => {
                    return <UserForm {...props }
                    />
                }
            }
            />

            <
            Route exact path = "/users"
            render = {
                props => {
                    if (this.isAuthenticated()) {
                        return <UserCard {...props }
                        />
                    } else {
                        return <Redirect to = "/login" / >
                    }
                }
            }
            /> < /
            React.Fragment >
        )
    }
}

export default ApplicationViews