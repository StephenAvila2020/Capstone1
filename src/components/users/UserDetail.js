import React, { Component } from 'react';
import UserManager from '../../modules/UserManager';
import './UserDetail.css'

class UserDetail extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("UserDetail: ComponentDidMount");
    //get(id) from UserManager and hang on to the data; put it into state
    UserManager.get(this.props.userId)
    .then((user) => {
      this.setState({
        username: user.username,
        email: user.email,
        password: user.password,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in UserManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    UserManager.delete(this.props.userId)
    .then(() => this.props.history.push("/users"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Username: <span style={{ color: 'darkslategrey' }}>{this.state.username}</span></h3>
            <p>Email: {this.state.email}</p>
            <p>Password: {this.state.password}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Account</button>
        </div>
      </div>
    );
  }
}

export default UserDetail;