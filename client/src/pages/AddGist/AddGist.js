import React, { Component } from "react";
import Heading from "../../components/Heading";
import GistForm from "../../components/GistForm";

class AddGist extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <Heading>Add Gist</Heading>
        </div>

        <div className="row" />
        <GistForm
        hide = {this.props.hide}
        user = {this.props.user} 
        />
      </div>
    );
  }
}

export default AddGist;
