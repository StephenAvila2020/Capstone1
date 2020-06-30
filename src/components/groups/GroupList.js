import React, { Component } from 'react'
//import the components we will need
import GroupCard from './GroupCard'
import GroupManager from '../../modules/GroupManager'

class GroupList extends Component {
    //define what this component needs to render
    state = {
        groups: [],
    }

componentDidMount(){
    console.log("Group LIST: ComponentDidMount");
    //getAll from GroupManager and hang on to that data; put it in state
    GroupManager.getAll()
    .then((groups) => {
        this.setState({
            groups: groups
        })
    })
}

render(){
    console.log("Group LIST: Render");

    return(
        <div className="container-cards">
            {this.state.groups.map(group => <GroupCard key={group.id} group={group} {...this.props}
            />)}
        </div>
    )
}
}

export default GroupList