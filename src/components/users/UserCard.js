import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

class UserCard extends Component {
  render() {
    return (
      <div className="card">
        <Card style={{ width: "40%" }}>
          <Card.Img
            className="profilepic"
            variant="top"
            src={this.props.user.image}
          />
          <Card.Body>
            <Card.Title>
              <span className="">{this.props.user.username}</span>
            </Card.Title>
            <Card.Text>
              <p>Email: {this.props.user.email}</p>
              <p>Rank: {this.props.user.rank}</p>
              <p>About Me: {this.props.user.about}</p>
              <p>Favorite Perks: {this.props.user.perk}</p>
            </Card.Text>
            <button type="button" onClick={this.handleDelete}>
              Delete Account
            </button>
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
                "Generator locations are randomly selected before the trial, so
                they cannot be simply memorised. To find Generators, Survivors
                can try looking for the flashing lights above them or listen for
                the sound of partially repaired ones."
              </p>
              <footer className="blockquote-footer">
                <small className="card-stuff">
                  Fog Whisper Tips  {""}
                  <cite title="Source Title">Dead By Daylight</cite>
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
