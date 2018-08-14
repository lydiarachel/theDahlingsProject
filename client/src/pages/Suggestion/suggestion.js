import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import ViewCard from "../../components/ViewCard";
import "./Suggestion.css";

class Suggestion extends Component {
  state = {
    Suggestions: []
  };
  componentDidMount(){
    this.loadSuggestion()
  }
  loadSuggestion = () => {
    API.getSuggestion()
        .then(res =>
        this.setState({ Suggestions: res.data,})
    )
    .catch(err => console.log(err));
}
  searchSuggestion = event => {
    event.preventDefault()
    
  }
  render() {
    return (
      <div>
        <div className="search-box">
          <SearchBar />
        </div>

        <div className="title">
          <Heading>Suggestions</Heading>
        </div>
        {!this.state.savedArticles.length ? (
          <h5>No Suggestions Have been Created</h5>
        ) : (
          <div className="row">
            {this.state.Suggestions.map(suggestion => (
              <ViewCard
                key={suggestion._id}
                title={suggestion.title}
                author={suggestion.author}
                url={suggestion.category}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Suggestion;
