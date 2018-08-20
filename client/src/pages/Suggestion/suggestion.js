import React, { Component } from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import API from '../../utils/API';
import "./Suggestion.css";

class Suggestion extends Component {
  state = {
    Suggestions: []
  };
  componentDidMount(){
    this.loadSuggestion()
  }
  updateLikes = info => {
    API.updateSuggestion({
      _id: info.id,
      liked: info.likes
    }).then(results => {
      console.log(results)
      if (results) {
        this.loadSuggestion();
      }
    });
    
  }
  loadSuggestion = () => {
    API.findSuggestion()
        .then(res =>
        this.setState({ Suggestions: res.data})
        
    )
    .catch(err => console.log(err));
}
 
  render() {
    return (
      <div>

        <div className="title">
          <Heading>Suggestions</Heading>
        </div>
        {!this.state.Suggestions.length ? (
          <h5>No Suggestions Have been Created</h5>
        ) : (
          <div className="row">
            {this.state.Suggestions.map(suggestion => (
              <Card
                key={suggestion._id}
                id ={suggestion._id}
                title={suggestion.title}
                date={suggestion.date}
                body={suggestion.suggestion}
                authorName={suggestion.author.name}
                category={suggestion.category}
                liked = {suggestion.liked}
                method = {this.updateLikes}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Suggestion;
