import React, { Component } from 'react';
import UserManager from '../../modules/UserManager';
import './UserForm.css'


class UserForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        rank: "",
        about: "",
        perk: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create User     
    object, invoke the UserManager post method, and redirect to the full user list
    */
    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.username === "" ||  this.state.email === "" ||  this.state.password === "" ||  this.state.rank === "" ||  this.state.about === "" ||  this.state.perk === ""   ) {
            window.alert("Please input an User Name and Password");
        } else {
            this.setState({ loadingStatus: true });
            const user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                rank: this.state.rank,
                about: this.state.about,
                perk: this.state.perk
                
            };

            // Create the user and redirect user to user list
            UserManager.post(user)
            .then(() => this.props.history.push("/users"));
        }
    };

    render(){

        return(
            <>
             
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="email"
                        placeholder="email"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="password"
                        placeholder="password"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="username"
                        placeholder="username"
                        />
                        <label htmlFor="username">Username</label>

                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="rank"
                        placeholder="rank"
                        />
                        <label htmlFor="rank">Rank</label>

                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="about"
                        placeholder="about"
                        />
                        <label htmlFor="about">About Me</label>

                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="perk"
                        placeholder="perk"
                        />
                        <label htmlFor="perk">Favorite Perks</label>
                        
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewUser}
                        >New User</button>
                    </div>
                </fieldset>
            </form>
            
        </>
        
        )
    }
}

export default UserForm