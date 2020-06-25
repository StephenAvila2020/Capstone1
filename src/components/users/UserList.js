import React, { Component } from 'react'
    //import the components we will need
    import UserCard from './UserCard'
    import UserManager from '../../modules/UserManager'

    class UserList extends Component {
        //define what this component needs to render
        state = {
            users: [],
        }
        deleteUser = id => {
            UserManager.delete(id)
                .then(() => {
                    UserManager.getAll()
                        .then((newUsers) => {
                            this.setState({
                                users: newUsers
                            })
                        })
                })
        }

    componentDidMount(){
        console.log("User LIST: ComponentDidMount");
        //getAll from UserManager and hang on to that data; put it in state
        UserManager.getAll()
        .then((users) => {
            this.setState({
                users: users
            })
        })
    }

    render() {
        console.log("User LIST: Render");
       
           

        return (
            <>
            
            

            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => { this.props.history.push("/users/new") }}>
                Enter User
    </button>
        </section>
        

            <div className="container-cards">
                {this.state.users.map(user =>
                    user.id === JSON.parse(localStorage.getItem("credentials")).id ?   <UserCard key={user.id} user={user} deleteUser={this.deleteUser} {...this.props} /> : ""
                    
                )}
            </div>
                </>
        )
    }
}

export default UserList