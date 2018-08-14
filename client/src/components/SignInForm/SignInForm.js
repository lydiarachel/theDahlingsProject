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
export default SignIn;