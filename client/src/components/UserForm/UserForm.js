import React, { Component } from "react";

class UserForm extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="interest" type="text" />
              <label for="Interest">Interest</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="knowledge" type="text" />
              <label for="knowledge">Interest</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
