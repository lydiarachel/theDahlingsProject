import React, { Component } from "react";
import Heading from "../../components/Heading";
import UserForm from "../../components/UserForm";

class ProfilePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="title">
          <Heading>My Profile</Heading>
          <h5>You can edit your profile here</h5>
        </div>
        <div className="row">
            Update Form goes here
        </div>
      </div>
    )
  }
}

export default ProfilePage;