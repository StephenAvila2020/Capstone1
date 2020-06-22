import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./user.jpg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Doodles</span></h3>
          <p>Breed: Poodle</p>
        </div>
      </div>
    );
  }
}

export default UserCard;