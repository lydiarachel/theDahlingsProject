import React, { Component } from "react";
import API from "../../utils/API";
const allowed = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
class UserForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    interest: '',
    knowledge: '',
    image: '',
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if(!this.state.first_name && !this.state.last_name){
       alert('Please Enter a First and Last Name')
    }
    else if(!this.state.email){
      alert('Please enter a email')
    }
    else if (!this.state.password){
      alert('Please enter a password')
    }
    else if(!this.state.interest){
      alert('Please enter some Interest')
    }
    else if((this.state.password).length < 6){
      alert('Password must contain at six Characters')
    }
    else if(!allowed.test(this.state.email)){
      alert('Please Enter a valid Email')
    }
    else{
      let name = `${this.state.first_name} ${this.state.last_name}`;
      let email = this.state.email;
      let password = this.state.password;
      let knowledge = (this.state.knowledge).split(', ');
      let interests = (this.state.interest).split(', ');
      let image = this.state.image;
      API.createUser({
        email: email,
        name: name,
        password: password,
        knowledge: knowledge,
        interested: interests,
        imageUrl: image
      })
      this.setState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        knowledge: '',
        interest: '',
        image: ''
      })
    }
  }
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                name="first_name"
                type="text"
                value={this.state.first_name}
                onChange={this.handleInputChange}
                 />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                name="last_name"
                type="text"
                value={this.state.last_name}
                onChange={this.handleInputChange} />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
              name="interest"
              type="text"
              value={this.state.interest}
              onChange={this.handleInputChange}
              />
              <label htmlFor="Interest">Interest</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
              name="knowledge"
              type="text"
              value={this.state.knowledge}
              onChange={this.handleInputChange}
              />
              <label htmlFor="knowledge">Knowledge</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
              name= "email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
            onClick={this.handleFormSubmit}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
