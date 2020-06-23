import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";

class UserCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./user.jpg")} alt="My Dog" />
          </picture>

          <h3>
            
            <span className="card-username">{this.props.user.username}</span>
          </h3>
          {/* <p>Date: {this.props.event.date}</p>
          <p>Location: {this.props.event.location}</p> */}
          <Link to={`/users/${this.props.user.id}`}>
            <button>User Details</button>
          </Link>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/users/${this.props.user.id}/edit`);
            }}
          >
            Edit User
          </button>
        </div>
      </div>
    );
  }
}

export default UserCard;
