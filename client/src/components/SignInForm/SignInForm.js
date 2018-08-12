import React, { Component } from "react";
class SignIn extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="text" className="validate" />
              <label for="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="password" type="text" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;