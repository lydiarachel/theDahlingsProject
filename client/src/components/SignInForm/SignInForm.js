import React, { Component } from "react";
import API from "../../utils/API";
import GoogleAuthBtn from "../../components/GoogleAuthBtn";
import "./SignInForm.css";

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.state.email, this.state.password)
    if(!this.state.email){
      window.M.toast({html:'Please enter a Email', classes: 'cyan'})
    }
    else if(!this.state.password){
      window.M.toast({html:'Please enter a Password', classes: 'cyan'})
    }
    else{
      API.loginLocal({
        email: this.state.email,
        password: this.state.password
      }).then(user => {
        if (user.data.message !== 'Route not found') {
          API.getAuthenticatedUser()
            .then(user => {
              if (user) {
                window.location.assign('/')
              }
            })
        }
        else{
          window.M.toast({html: 'Incorrect email password combo', classes: 'cyan'})
        }
      })
      
    }
  }
  render() {
    return (
        <form className="signin-form">
          <div className="row">
            <div className="row remove-padding">
              <div className="input-field col s12">
                <input
                name= "email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field col s12">
                <input 
                name= "password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}/>
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row remove-padding">
              <div className="buttons-auth">
                <button
                  className="btn waves-effect waves-light btn-large btn-auth-page"
                  type="submit"
                  onClick={this.handleFormSubmit}
                  name="action">
                    Log In
                    <i className="material-icons left"></i>
                  </button>

                <GoogleAuthBtn />
              </div>
            </div>
          </div>            
        </form>
    );
  }
}
export default SignInForm;