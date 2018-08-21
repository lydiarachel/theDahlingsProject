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
        <form className="form">
          <div className="row">
            <div className="input-field col s12 form-inside">
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

            <div className="buttons-auth">
                <button
                  className="btn waves-effect waves-light btn-large btn-auth-page"
                  type="submit"
                  name="action">
                    Log In
                    <i className="material-icons left"></i>
                  </button>
            
              

              <GoogleAuthBtn />
            </div>
          </div>            
        </form>
    );
  }
}
export default SignInForm;