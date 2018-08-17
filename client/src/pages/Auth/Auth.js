import React, { Component } from "react";
import Heading from "../../components/Heading";
import SignInForm from "../../components/SignInForm";
import GoogleAuthBtn from "../../components/GoogleAuthBtn";

class Auth extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="title">
          <Heading>Welcone To Get the Gist</Heading>
        </div>
        <div className="row">
          <SignInForm />
        </div>

        <GoogleAuthBtn />
      </div>
    )
  }
}

export default Auth;