import React, { Component } from "react"
import UserManager from "../../modules/UserManager"
import "./UserForm.css"

class UserEditForm extends Component {
    //set the initial state
    state = {
      username: "",
        email: "",
        password: "",
        rank: "",
        about: "",
        perk: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingUser = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedUser = {
        username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                rank: this.state.rank,
                about: this.state.about,
                perk: this.state.perk,
                id: this.props.match.params.userId
      };

      UserManager.update(editedUser)
      .then(() => this.props.history.push("/users"))
    }

    componentDidMount() {
      UserManager.get(this.props.match.params.userId)
      .then(user => {
          this.setState({
            username: user.username,
            email: user.email,
            password: user.password,
            rank: user.rank,
            about: user.about,
            perk: user.perk,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
          <div className="formgrid">
          <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="username"
                value={this.state.username}
              />
              <label htmlFor="username">Username</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="email"
                value={this.state.email}
              />
              <label htmlFor="email">Email</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="password"
                value={this.state.password}
              />
              <label htmlFor="password">Password</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="rank"
                value={this.state.rank}
              />
              <label htmlFor="rank">Rank</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="about"
                value={this.state.about}
              />
              <label htmlFor="about">About Me</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="perk"
                value={this.state.perk}
              />
              <label htmlFor="perk">Favorite Perks</label>

                    </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingUser}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default UserEditForm