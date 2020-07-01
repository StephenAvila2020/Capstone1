import React, { Component } from 'react';
import UserManager from '../../modules/UserManager';
import './UserDetail.css'
import Card from 'react-bootstrap/Card';

class UserDetail extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    rank: "",
    about: "",
    perk: "",
    image: "",
    groupId: "",
     loadingStatus: true,
  }

  componentDidMount(){
    console.log("UserDetail: ComponentDidMount");
    //get(id) from UserManager and hang on to the data; put it into state
    UserManager.getUserGroup(this.props.userId)
    .then((user) => {
      console.log(user)
      this.setState({
        username: user.username,
        email: user.email,
        password: user.password,
        rank: user.rank,
        about: user.about,
        perk: user.perk,
        image: user.image,
        groupId: user.groupId,
        loadingStatus: false
      });
    });
  }

 

  render() {
    return (
      <Card  style={{ width: '40%' }}>
      <Card.Img className="profilepic" variant="top" src= {this.state.image}  />
      <Card.Body>
        <Card.Title><span className="">{this.state.username}</span></Card.Title>
        <Card.Text>
        <p>Email: {this.state.email}</p>
              <p>Password: {this.state.password}</p>
              <p>Rank: {this.state.rank}</p>
              <p>About Me: {this.state.about}</p>
              <p>Favorite Perks: {this.state.perk}</p>
              <p>Team: {this.state.groupId}</p>
        </Card.Text>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Account</button>
      </Card.Body>
    </Card>
    );
  }
}

export default UserDetail;

