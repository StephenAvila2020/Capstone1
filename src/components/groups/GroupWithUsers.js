import React, { Component } from 'react'
import GroupManager from '../../modules/GroupManager'
import UserCard from '../users/UserCard'

class GroupWithUsers extends Component {
    state = {
      group: {},
      users: []
    }

    componentDidMount(){
        //got here now make call to get group with user
        GroupManager.getWithUsers(this.props.match.params.groupId)
            .then((APIResult) => {
            this.setState({
              group: APIResult,
              users: APIResult.users,
            })
        })
    }

    render(){
        return (
          <div className="card">
            <p>Group: {this.state.group.name}</p>
            {this.state.users.map(user =>
              <UserCard
                key={user.id}
                user={user}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default GroupWithUsers;