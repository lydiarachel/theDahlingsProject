import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import UserForm from "../../components/UserForm";
class Auth extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="title">
          <Heading>Create User Profile</Heading>
        </div>
        <div className="row">
          <UserForm />
        </div>
      </div>
    )
  }
}

export default Auth;
