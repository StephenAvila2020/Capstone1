import React, { Component } from "react";
import GroupManager from '../../modules/GroupManager'

class GroupEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    details: "",
    ranks: "",
    system: "",
    image: "",
    loadingStatus: true,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingGroup = (evt) => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedGroup = {
        groupName: this.state.name,
        details: this.state.details,
        ranks: this.state.ranks,
        system: this.state.system,
        image: this.state.image,
        id: parseInt(this.props.match.params.groupId),
    };
        //Parseint allows 
    GroupManager.update(editedGroup).then(() =>
      this.props.history.push("/groups")
    );
  };

  componentDidMount() {
    GroupManager.get(this.props.match.params.groupId).then((group) => {
      this.setState({
        groupName: group.name,
        details: group.details,
        ranks: group.ranks,
        image: group.image,
        system: group.system,
        loadingStatus: false,
      });
    })
    
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
                id="image"
                value={this.state.image}
              />
              <label htmlFor="image">Group Picture</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="groupName"
                value={this.state.groupName}
              />
              <label htmlFor="groupName">Group Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="details"
                value={this.state.details}
              />
              <label htmlFor="details">Details</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="system"
                value={this.state.system}
              />
              <label htmlFor="system">System</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ranks"
                value={this.state.ranks}
              />
              <label htmlFor="ranks">Ranks</label>

              
              
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingGroup}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default GroupEditForm;