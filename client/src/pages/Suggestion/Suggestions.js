import React, { Component } from "react";
import Heading from "../../components/Heading";
import Suggestion from "../../components/Suggestion";
import API from "../../utils/API";
import "./Suggestions.css";

class Suggestions extends Component {
  state = {
    Sugistions: []
  };
  componentDidMount() {
    this.loadSuggestion();
  }
  updateLikes = info => {
    API.updateSuggestion({
      _id: info.id,
      liked: info.likes
    }).then(results => {
      console.log(results);
      if (results) {
        this.loadSuggestion();
      }
    });
  };
  loadSuggestion = () => {
    API.findSuggestion()
      .then(res => {
        console.log(res.data);
        this.setState({ Sugistions: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row">
        <div className="title">
          <Heading>Su-gist-ions</Heading>
        </div>
        {!this.state.Sugistions.length ? (
          <h5>No Suggestions Have been Created</h5>
        ) : (
          <div>
            {this.state.Sugistions.map(suggestion => (
              <Suggestion
                key={suggestion._id}
                id={suggestion._id}
                title={suggestion.title}
                date={suggestion.date}
                body={suggestion.suggestion}
                authorName={suggestion.author.name}
                category={suggestion.category}
                liked={suggestion.liked}
                method={this.updateLikes}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Suggestions;
