import React, { Component } from 'react'
//import the components we will need
import AchievementCard from './AchievementCard'
import AchievementManager from '../../modules/AchievementManager'
import './CompletedAchievementList.css'

class CompletedAchievementList extends Component {
    //define what this component needs to render
    state = {
        achievements: [],
    }

//    gets all Achievements marked with a boolean of true from json
    componentDidMount(){
    //getAllcompleted from AchievementManager and hang on to that data; put it in state
    AchievementManager.getAllCompleted()
    .then((achievements) => {
        this.setState({
            achievements: achievements
        })
    })
}
// function that will allow me to change the boolean back to false to represent an incomplete Achievement
incompleteAchievement = id => {
    AchievementManager.incomplete(id)
    .then(AchievementManager.getAllCompleted)
      .then((newAchievement) => {
        this.setState({
            achievements: newAchievement
        })
      })
     
}

render(){
    console.log("completeAchievementList: Render");
  
    return(
        // button to take you back to Achievements you still have to do
        <>
        <section className="section-content">
        <button type="button" className="btn"
        onClick={()=> {this.props.history.push("/achievements")}}
        >
      View Achievements to Complete
  </button>
  <h1>Achievements Completed</h1>
 {/* loops through array to print Achievements marked true and changed the checkbox option from 'complete' to incomplete */}
</section>
      <div className="container-cards">
      {this.state.achievements.map(achievement =>
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          incompleteAchievement={this.incompleteAchievement}
          {...this.props}
        />
      )}
      </div>
      </>
    )
  }
}

export default CompletedAchievementList