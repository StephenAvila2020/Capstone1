import React, { Component } from 'react'
//import the components we will need
import AchievementCard from './AchievementCard'
import AchievementManager from '../../modules/AchievementManager'
import './AchievementList.css'

class AchievementList extends Component {
    //define what this component needs to render
    state = {
        achievements: [],
    }

   
      

componentDidMount(){
    //getAll from AchievementManager and hang on to that data; put it in state
    AchievementManager.getAll()
    .then((achievements) => {
        this.setState({
            achievements: achievements
        })
    })
}

completeAchievement = id => {
    AchievementManager.complete(id)
    .then(AchievementManager.getAll)
      .then((newAchievements) => {
        this.setState({
            achievements: newAchievements
        })
      })
     
}

render(){
    console.log("AchievementList: Render");
  
    return(
        <>
        {/* button to add new Achievement */}
        <section className="section-content">
        <button type="button" className="btn"
        onClick={() => {this.props.history.push("/achievements/new")}}>
      New Achievement
  </button>
  {/* ROUTE TO A COMPLETED Achievements PAGE */}
  <button type="button" className="btn"
        onClick={() => {this.props.history.push("/achievements/completed")}}
        >
      View Completed Achievements
  </button>
  <h1>Achievements To Complete</h1>
 {/* loops through array and prints single cards */}
</section>
      <div className="container-cards">
      {this.state.achievements.map(achievement =>
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          completeAchievement={this.completeAchievement}
          {...this.props}
        />
      )}
      </div>
      </>
    )
  }
}

export default AchievementList