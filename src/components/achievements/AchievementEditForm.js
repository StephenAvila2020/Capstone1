import React, { Component } from "react"
import AchievementManager from "../../modules/AchievementManager"
import './AchievementForm.css'


class AchievementEditForm extends Component {
    //set the initial state
    state = {
        picture:"",
        achievement: "",
      cardText: "",
      url:"",
      complete: false,
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingAchievement = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedAchievement = {
          picture: this.state.picture,
        id: this.props.match.params.achievementId,
        achievement: this.state.achievement,
        cardText: this.state.cardText,
        url: this.state.url,
        completed: false
      };

      AchievementManager.update(editedAchievement)
      .then(() => this.props.history.push("/achievements"))
    }

    componentDidMount() {
        AchievementManager.get(this.props.match.params.achievementId)
      .then(achievement => {
          this.setState({
              picture: achievement.picture,
            achievement: achievement.achievement,
            cardText: achievement.cardText,
            url: achievement.url,
            complete: false,
            loadingStatus: false,
          });
      });
    }


    render() {
      return (
        <>
        <form onSubmit={this.updateExistingAchievement}>
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
                className="form-control"
                onChange={this.handleFieldChange}
                id="achievement"
                value={this.state.achievement}
              />
              <label htmlFor="achievement">Achievement</label>
              <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="url"
                                value={this.state.url}
                            />
                            <label htmlFor="url">Walkthrough</label>
            </div>

            <div className="alignRight">
             

<button
                type="submit"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingAchievement}
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

export default AchievementEditForm