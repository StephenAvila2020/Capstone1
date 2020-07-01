import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';





class UserCard extends Component {


  render() {
    
    return (
     
     <div className="card">
       
        
       
      <Card  style={{ width: '40%' }}>
      <Card.Img className="profilepic" variant="top" src= {this.props.user.image}  />
      <Card.Body>
        <Card.Title><span className="">{this.props.user.username}</span></Card.Title>
        <Card.Text>
        <p>Email: {this.props.user.email}</p>
              <p>Password: {this.props.user.password}</p>
              <p>Rank: {this.props.user.rank}</p>
              <p>About Me: {this.props.user.about}</p>
              <p>Favorite Perks: {this.props.user.perk}</p>
              <p>Team: {this.props.user.groupId}</p>
        </Card.Text>
        <button type="button"  onClick={this.handleDelete}>Delete Account</button>
              <button
                type="button"
                onClick={() => {
                  this.props.history.push(`/users/${this.props.user.id}/edit`);
                }}
              >
                Edit User
              </button>
      </Card.Body>
      <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
    </Card>
    
    
    </div>
    );
  }
}

export default UserCard;

