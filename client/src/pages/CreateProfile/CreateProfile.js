import React, { Component } from "react";
import Heading from "../../components/Heading";
import UserForm from "../../components/UserForm";
class CreateProfile extends Component {
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

export default CreateProfile;
