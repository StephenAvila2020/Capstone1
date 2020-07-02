import React, { Component } from 'react';
import "./Group.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

class GroupCard extends Component {
  render() {
    return (
       <Card  style={{ width: '40%' }}>
      <Card.Img className="profilepic" variant="top" src= {this.props.group.image}  />
      <Card.Body>
        <Card.Title><span className="">{this.props.group.name}</span></Card.Title>
        <Card.Text>
        <p>Details: {this.props.group.details}</p>
              <p>System: {this.props.group.system}</p>
              <p>Ranks: {this.props.group.ranks}</p>
              <button type="button"
        onClick={() => { this.props.history.push(`/groups/${this.props.group.id}`) }}>Group Members</button>
        </Card.Text>
        <button type="button" onClick={() => this.props.deleteGroup(this.props.group.id)}>DELETE!</button>
              <button
                type="button"
                onClick={() => {
                  this.props.history.push(`/groups/${this.props.group.id}/edit`);
                }}
              >
                Edit Group
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
    );
  }
}

export default GroupCard;

