import React from "react";
import Heading from "../../components/Heading";
import SuggestionForm from "../../components/SuggestionForm";

const AddSuggestion = props => (
  <div>
    

    <div className="title">
      <Heading>Add Su-gist-ion</Heading>
    </div>

    <div className="row" />
    <SuggestionForm 
    user = {props.user}/>
  </div>
);

export default AddSuggestion;
