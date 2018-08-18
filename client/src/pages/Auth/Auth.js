import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import SignInForm from "../../components/SignInForm";


class Auth extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="title">
          <Heading>Welcome to Get the Gist</Heading>
        </div>
        <div className="row">
          <SignInForm />

          <div className="col m6">
            <p>
              An oasis for the curious
            </p>
            <div className="new-here">
              <p>New Here?</p>
            </div>

            <Link to="/create-profile"
                className="btn-large btn-auth-page"
            >
                  Sign Up
                  <i className="material-icons right"></i>
            </Link> 
          </div>

          
        </div>
        
      </div>
    )
  }
}

export default Auth;