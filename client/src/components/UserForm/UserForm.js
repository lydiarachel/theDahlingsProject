import React, { Component } from "react";
import API from "../../utils/API";
const allowed = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
let interestArray = [];
let knowledgeArray = [];
class UserForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    interest: "",
    knowledge: "",
    image: "",
    password2: ""
  };
  onKeyPress = event =>{
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
    
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  addInterest = event =>{
    event.preventDefault();
    if (event.which === 13 /* Enter */ && this.state.interest) {
      interestArray.push(this.state.interest.trim())
      this.setState({interest: ''})
      window.M.toast({html: "Item added to Interest", classes: 'cyan'})
      
    }  
  }
  addKnowledge = event =>{
    event.preventDefault();
    if (event.which === 13 /* Enter */ && this.state.knowledge) {
      knowledgeArray.push(this.state.knowledge.trim())
      window.M.toast({html: "Item added to Knowledge", classes: 'cyan'})
      this.setState({knowledge: ''})
      
    }
  }
  handleFormSubmit = event => {
    event.preventDefault();
   
    if (!this.state.first_name && !this.state.last_name) {
      window.M.toast({
        html: "Please Enter a First and Last Name",
        classes: "cyan"
      });
    } else if (!this.state.email) {
      window.M.toast({ html: "Please enter a email", classes: "cyan" });
    } else if (!this.state.password) {
      window.M.toast({ html: "Please enter a password", classes: "cyan" });
    } else if (!this.state.password2) {
      window.M.toast({ html: "Please Confirm Your Password", classes: "cyan" });
    } else if (!this.state.interest) {
      window.M.toast({ html: "Please enter some Interest", classes: "cyan" });
    } else if (this.state.password.length < 6) {
      window.M.toast({
        html: "Password must contain at six Characters",
        classes: "cyan"
      });
    } else if (!allowed.test(this.state.email)) {
      window.M.toast({ html: "Please Enter a valid Email", classes: "cyan" });
    } else {
      if(this.state.interest){
        interestArray.push(this.state.interest)
      }
      if(this.state.knowledge){
        knowledgeArray.push(this.state.knowledge)
      }
      const new_user = new FormData();
      new_user.append('name', `${this.state.first_name} ${this.state.last_name}`);
      new_user.append('email', this.state.email);
      new_user.append('password', this.state.password);
      new_user.append('password2', this.state.password2);
      new_user.append('knowledge', knowledgeArray);
      new_user.append('interests', interestArray);
      new_user.append('profileImage', this.uploadInput.files[0]);

      API.registerUser(new_user).then(success => {
        if (success.data === "Email address already taken") {
          window.M.toast({ html: success.data, classes: "cyan" });
        } else {
          API.getAuthenticatedUser(success.data).then(user => {
            if (user) {
              window.location.assign("/");
            }
          });
        }
      });

      this.setState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
        knowledge: "",
        interest: "",
        profileImage: ""
      });
    }
  };
  render() {
    return (
      <div className="row">
        <form className="col s12" enctype="multipart/form-data">
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                name="first_name"
                type="text"
                value={this.state.first_name}
                onChange={this.handleInputChange}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input
                name="last_name"
                type="text"
                value={this.state.last_name}
                onChange={this.handleInputChange}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="interest"
                type="text"
                onKeyUpCapture ={this.addInterest}
                value={this.state.interest}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Interest">Interest (Press enter to Add)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="knowledge"
                type="text"
                onKeyUpCapture ={this.addKnowledge}
                value={this.state.knowledge}
                onChange={this.handleInputChange}
              />
              <label htmlFor="knowledge">Knowledge (Press enter to Add)</label>
            </div>
          </div>
          <div className="row">
            <div className="file-field input-field col s12">
              <div className="btn cyan">
                <span>File</span>
                <input
                  id="profileImage"
                  name="profileImage"
                  type="file"
                  ref={ref => {
                    this.uploadInput = ref;
                  }}
                />
              </div>
              <div class="file-path-wrapper">
                <input
                  ref={ref => {
                    this.fileName = ref;
                  }}
                  class="file-path validate"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
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
          <div className="row">
            <div className="input-field col s12">
              <input
                name="password2"
                type="password"
                value={this.state.password2}
                onChange={this.handleInputChange}
              />
              <label htmlFor="password">Confirm Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light right btn-gist-page"
            type="submit"
            name="action"
            enctype="multipart/form-data"
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
