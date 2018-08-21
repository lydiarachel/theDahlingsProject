import React, { Component } from "react";
import API from "../../utils/API";
import categories from "../../utils/Categories";

class GistForm extends Component {
  state = {
    gistTitle: "",
    gistBody: "",
    gistCategory: ""
  };

  componentDidMount() {
    const selects = document.querySelectorAll('select');
    for (var i = 0; i < selects.length; i++) {
      window.M.FormSelect.init(selects[i]);
    }
  }

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
    console.log(this.state.gistCategory);
    API.createGist({
      title: this.state.gistTitle,
      body: this.state.gistBody,
      category: this.state.gistCategory,
      author: "dfa2e0e0c2961ecdc692a06e"
    });
    this.setState({ gistTitle: "" });
    this.setState({ gistBody: "" });
    this.setState({ gistCategory: "" });
  };
  
  render()
  
   {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                name="gistTitle"
                type="text"
                value={this.state.gistTitle}
                onChange={this.handleInputChange}
              />
              <label htmlFor="gist title">Gist Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="gistBody"
                className="materialize-textarea"
                value={this.state.gistBody}
                onChange={this.handleInputChange}
              />
              <label htmlFor="gist body">Gist Content</label>
            </div>
          </div>
          
          <div className="row">
            <div className="input-field col s6">
              <select
              value={this.state.gistCategory}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                Choose a Category
              </option>
              {categories.map(category => {
                return (
                  <option
                    data-id={category.id}
                    key={category.id}
                    value={category.id}
                  >
                    {category.label}
                  </option>
                );
              })}
              </select>
              <label>Select A Category</label>
            </div>
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

export default GistForm;
