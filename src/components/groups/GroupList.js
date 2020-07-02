import React, { Component } from 'react'
//import the components we will need
import GroupCard from './GroupCard'
import GroupManager from '../../modules/GroupManager'

class GroupList extends Component {
    //define what this component needs to render
    state = {
        groups: [],
    }
    deleteGroup = id => {
        GroupManager.delete(id)
            .then(() => {
                GroupManager.getAll()
                    .then((newGroups) => {
                        this.setState({
                            groups: newGroups
                        })
                    })
            })
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
            <h1><button  type="button"
                     
                     onClick={() => { this.props.history.push("/groups/new") }}>
                     Create New Group
</button></h1>
            {this.state.groups.map(group => <GroupCard key={group.id} group={group} deleteGroup={this.deleteGroup} {...this.props}
            />)}
        </div>
    )
}
}

export default GroupList