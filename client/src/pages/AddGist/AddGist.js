import React, { Component } from "react";
import Heading from "../../components/Heading";
import GistForm from "../../components/GistForm";

class AddGist extends Component {
  componentDidMount(){
    console.log(this.props.match.params)
  }
  render() {
    return (
      <div>
        <div className="title">
          <Heading>Add Gist</Heading>
        </div>

        <div className="row" />
        <GistForm 
        title= {this.props.match.params.title}
        category = {this.props.match.params.category}/>
      </div>
    );
  }
}

export default AddGist;
