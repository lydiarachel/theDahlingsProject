import React, { Component } from "react";
import API from "../../utils/API";

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
    if(!this.state.email){
      alert('Please enter a Email')
    }
    else if(!this.state.password){
      alert('Please enter a Password')
    }
    else{
      API.authUser({
        email: this.state.email,
        password: this.state.password
      })
      
    }
  }
  render() {
    return (
      <div className="row">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <input
              name= "email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              />
              <label for="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input 
              name= "password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}/>
              <label for="password">Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Sign In
            <i className="material-icons left"></i>
          </button>
          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Create
            <i className="material-icons right"></i>
          </button>
        </form>
      </div>
    );
  }
}
export default SignInForm;