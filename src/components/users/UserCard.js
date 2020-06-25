import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";




class UserCard extends Component {
  render() {
    
    return (
     
     
       
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={this.props.user.image} alt="My Dog" />
          </picture> */}

          <h3>
            
            <span className="">{this.props.user.username}</span>
          </h3>
          <p>Email: {this.props.user.email}</p>
          <p>Password: {this.props.user.password}</p>
          <p>Rank: {this.props.user.rank}</p>
          <p>About Me: {this.props.user.about}</p>
          <p>Favorite Perks: {this.props.user.perk}</p>
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
