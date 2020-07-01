import React, { Component } from 'react';
import "./Group.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

class GroupCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
         
          <h1>Team: <span className="card-groupname">{this.props.group.name}</span></h1>
          <button type="button"
        onClick={() => { this.props.history.push(`/groups/${this.props.group.id}`) }}>Details</button>
        </div>
      </div>
    );
  }
}

export default GroupCard;