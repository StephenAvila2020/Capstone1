// import { Route } from 'react-router-dom'
import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import UserList from "./users/UserList";
import Login from "./auth/Login";
import UserForm from "./users/UserForm";
import UserDetail from './users/UserDetail'
import UserEditForm from './users/UserEditForm'
//only include these once they are built - previous practice exercise

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home {...props} />;
          }}
        />{" "}
         <Route path="/users/new" render={(props) => {
          return <UserForm {...props} />
        }} />

        <Route exact path="/users" render={props => {
          if (this.isAuthenticated()) {
            return <UserList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/users/:userId(\d+)" render={(props) => {
          // Pass the userId to the UserDetailComponent
          return <UserDetail userId={parseInt(props.match.params.userId)} {...props} />
        }} />

        <Route
          path="/users/:userId(\d+)/edit" render={props => {
            return <UserEditForm {...props} />
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
