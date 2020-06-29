import React, { Component } from "react"
import UserManager from "../../modules/UserManager"
import { BrowserRouter as Router } from 'react-router-dom';




class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    loggedIn: false,
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    UserManager.getByEmail(this.state.email)
    .then((users) => {
      console.log(users)
      if(users[0] === undefined ) {
        window.alert("User not found!")
      }
      else{
        localStorage.setItem(
          "credentials",
          JSON.stringify({
              email: this.state.email,
              password: this.state.password,
              id:users[0].id
          })
      )
      this.props.history.push("/users");
      }
    })


   

  }

  render() {
    
    return (
     
        
       <form className="form"   onSubmit={this.handleLogin}
       >   
     
     <fieldset>
     
         <h3>Please sign in</h3>
         <div className="formgrid">
             <input onChange={this.handleFieldChange} type="email"
                 id="email"
                 placeholder="Email address"
                 required="" autoFocus="" />
             <label htmlFor="inputEmail">Email address</label>

             <input onChange={this.handleFieldChange} type="password"
                 id="password"
                 placeholder="Password"
                 required="" />
             <label htmlFor="inputPassword">Password</label>
         </div>
         <button type="submit">
             Sign in
         </button>
         <section>
         <button  type="button"
                     
                     onClick={() => { this.props.history.push("/users/new") }}>
                     New User
</button>
</section>
</fieldset>
</form>
     
     
             
             
   
  
      
      
     
      
    )
  }

}

export default Login


