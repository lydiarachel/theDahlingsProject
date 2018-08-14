import React, { Component } from "react";
import API from "../../utils/API";
import categories from "../../utils/Categories";
class SuggestionForm extends Component {
  state = {
    suggestionTitle: "",
    suggestionBody: "",
    gistCategory: ""
  };
  handleChange = event => {
    this.setState({ gistCategory: event.target.value });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event, data) => {
    event.preventDefault();
    if(!this.state.suggestionBody && !this.state.suggestionTitle && !this.state.gistCategory){
      alert('All fields need to be field out')
    }
    API.createSuggestion({
      title: this.state.suggestionTitle,
      body: this.state.suggestionBody,
      category: this.state.gistCategory
    });
    this.setState({ gistTitle: "" });
    this.setState({ gistBody: "" });
    this.setState({ gistCategory: "" });
  };
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                name="gistTitle"
                type="text"
                value={this.state.suggestionTitle}
                onChange={this.handleInputChange}
              />
              <label htmlFor="gist title">Suggestion Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="gistBody"
                className="materialize-textarea"
                value={this.state.suggestionBody}
                onChange={this.handleInputChange}
              />
              <label htmlFor="gist body">Suggestion Content</label>
            </div>
          </div>
          <div className="input-field col s6">
            <select
              className = 'browser-default'
              value={this.state.gistCategory}
              onChange={this.handleChange}
            > 
              <option value='' disabled>Choose a Category</option>
              {
                categories.map((category) => {
                  return <option value={category.id}>{category.label}</option>
                })
              }
            </select>
            
          </div>
          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
            onClick={this.handleFormSubmit}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default SuggestionForm;
