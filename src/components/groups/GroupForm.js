import React, { Component } from "react";
import GroupManager from "../../modules/GroupManager";
import "./GroupForm.css";

class GroupForm extends Component {
  state = {
    name: "",
    details: "",
    ranks: "",
    system: "",
    image: "",
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Group     
    object, invoke the GroupManager post method, and redirect to the full Group list
    */
  constructNewGroup = (evt) => {
    evt.preventDefault();
    if (
      this.state.name === "" ||
      this.state.details === "" ||
      this.state.ranks === "" ||
      this.state.system === "" ||
      this.state.image === ""  
    ) {
      window.alert("Please input an group Name and Password");
    } else {
      this.setState({ loadingStatus: true });
      const group = {
        name: this.state.name,
        details: this.state.details,
        ranks: this.state.ranks,
        system: this.state.system,
        image: this.state.image,
        
      };

      // Create the group and redirect group to group list
      GroupManager.post(group).then(() => this.props.history.push("/groups"));
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="image"
                placeholder="image"
              />
              <label htmlFor="image">Group Picture</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="name"
                placeholder="name"
              />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="ranks"
                placeholder="ranks"
              />
              <label htmlFor="ranks">Ranks</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="system"
                placeholder="system"
              />
              <label htmlFor="system">System</label>

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="details"
                placeholder="details"
              />
              <label htmlFor="details">Details</label>

             
              
              
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewGroup}
              >
                New Group
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default GroupForm;