// import { Route } from 'react-router-dom'
import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import UserList from "./users/UserList";
import Login from "./auth/Login";
import UserForm from "./users/UserForm";
// import UserDetail from './users/UserDetail'
import UserEditForm from "./users/UserEditForm";
import GroupEditForm from "./groups/GroupEditForm";
import GroupForm from "./groups/GroupForm";
import GroupList from "./groups/GroupList";
import GroupWithUsers from "./groups/GroupWithUsers";
import AchievementList from './achievements/AchievementList'
import AchievementForm from './achievements/AchievementForm'
import AchievementEditForm from './achievements/AchievementEditForm'
import CompletedAchievementList from './achievements/CompletedAchievementList'
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
        <Route
          path="/users/new"
          render={(props) => {
            return <UserForm {...props} />;
          }}
        />
        <Route
          path="/groups/new"
          render={(props) => {
            return <GroupForm {...props} />;
          }}
        />
        <Route
          exact
          path="/users"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <UserList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        
        <Route
          exact
          path="/achievements"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <AchievementList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/achievements/new"
          render={(props) => {
            return <AchievementForm {...props} />;
          }}
        />
        <Route
          exact
          path="/achievements/:achievementId(\d+)/edit"
          render={(props) => {
            return <AchievementEditForm {...props} />;
          }}
        />
        <Route
          path="/achievements/completed"
          render={(props) => {
            return <CompletedAchievementList {...props} />;
          }}
        />
        <Route
          path="/users/:userId(\d+)/edit"
          render={(props) => {
            return <UserEditForm {...props} />;
          }}
        />
        <Route
          path="/groups/:groupId(\d+)/edit"
          render={props => {
            return <GroupEditForm {...props} />;
          }}
        />
        <Route
          exact
          path="/groups"
          render={(props) => {
            return <GroupList {...props} />;
          }}
        />
        <Route
          path="/groups/:groupId(\d+)"
          render={(props) => {
            return <GroupWithUsers {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
