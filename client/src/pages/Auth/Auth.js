import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import SignInForm from "../../components/SignInForm";
import "./Auth.css";


class Auth extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="auth-title">
          <Heading>get the gist</Heading>
          <p className="sub-heading">
          <i className="material-icons">format_quote</i>  An oasis for the curious
          </p>
        </div>

        <div className="sub-title">
          Sign in to continue to your account
        </div>

        <div className="row">
          <SignInForm />
        </div>
        
        <div className="row auth-options">
          <div>
            
            <div className="sub-title">
              New Here?
            </div>

            <Link to="/create-profile"
                className="btn-large btn-auth-page"
            >
                  Sign Up
                  <i className="material-icons right"></i>
            </Link> 
          </div>

          <div>
            <div className="sub-title">
              Keep browsing as a guest
            </div>

            <Link to="/"
                className="btn-large btn-auth-page"
            >
                  Continue as a Guest
                  <i className="material-icons right"></i>
            </Link> 
          </div>
        </div>
        
      </div>
    )
  }
}

export default Auth;