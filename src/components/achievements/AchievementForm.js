import React, { Component } from "react";
import AchievementManager from "../../modules/AchievementManager";
import "./AchievementForm.css";

class AchievementForm extends Component {
  state = {
    picture: "",
    achievement: "",
    cardText: "",
    url:"",
    complete: false,
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Achievement object, invoke the AchievementManager post method, and redirect to the full Achievementlist
   */
  constructNewAchievement = (evt) => {
    evt.preventDefault();
    if (
      this.state.achievement === "" ||
      this.state.cardText === "" ||
      this.state.picture === "" ||
      this.state.url === ""
    ) {
      window.alert("Please input an Achievement name and date");
    } else {
      this.setState({ loadingStatus: true });
      const achievement = {
        picture: this.state.picture,
        achievement: this.state.achievement,
        cardText: this.state.cardText,
        url: this.state.url,
        completed: false,
      };

      // Create the Achievement and redirect user to Achievement list
      AchievementManager.post(achievement).then(() =>
        this.props.history.push("/achievements")
      );
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.constructNewAchievement}>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="picture"
                value={this.state.picture}
              />
              <label htmlFor="picture">Picture</label>

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="achievement"
                placeholder="Achievement name"
              />
              <label htmlFor="achievement">Achievement</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="cardText"
                placeholder="Achievement Requirement"
              />
              <label htmlFor="cardText">Achievement requirement</label>
              <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="url"
                                value={this.state.url}
                            />
                            <label htmlFor="url">URL</label>
            </div>
            <div className="alignRight">
              <button
                type="submit"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewAchievement}
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

export default AchievementForm;
