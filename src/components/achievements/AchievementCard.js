import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './AchievementCard.css'

class AchievementCard extends Component {
  render() {
      

    return (
      
      // prints individual cards for achievements and pulls from props to fill the info in for you
      // achievement name is is also a button that allows you to click to edit
       <Card style={{ width: '20%' }}>
  <Card.Img variant="top" src={this.props.achievement.picture} />
  <Card.Body>
    <Card.Title><span className="card-achievementname"><button className="favorite styled"
        type="button" onClick={() => {this.props.history.push(`/achievements/${this.props.achievement.id}/edit`)}}>
        {this.props.achievement.achievement}</button></span></Card.Title>
    <Card.Text>
    {this.props.achievement.cardText}
    </Card.Text>
    <form>
           {
             this.props.achievement.completed ?
             <label>
             incomplete:
           <input type="checkbox" name="checkbox" onChange={() => this.props.incompleteAchievement(this.props.achievement.id)}></input>
           </label>
           :
           <label>
           Completed:
         <input type="checkbox" name="checkbox" onChange={() => this.props.completeAchievement(this.props.achievement.id)}></input>
         </label>

           }
           
         </form>
         <Card.Link href={this.props.achievement.url}>Walkthrough</Card.Link>
  </Card.Body>
</Card> 
      
    );
  }
}

export default AchievementCard;

