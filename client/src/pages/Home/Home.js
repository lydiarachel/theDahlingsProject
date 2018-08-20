import React from "react";
import { withRouter } from 'react-router-dom';
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import ViewCard from "../../components/ViewCard";
import ActionButtons from "../../components/ActionButtons";
import API from "../../utils/API";
import "./Home.css";

class Home extends React.Component {
  state = {
    search: "",
    results: [],
    error: ""
  }
  
  componentDidMount() {
    API.findGists()
      .then(result => {
        console.log(result.data);
        this.setState({
          results: result.data
        })
      })
      .catch(err => console.log(err));
  }

  // Update search value on every change
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // When Enter is pressed
  handleKeyPress = event =>  {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log("Enter was pressed");
      this.props.history.push('/search-results/' + this.state.search);
    }
  };

  render() {
    // don't render the page untill state.results populate
    if (this.state.results.length === 0) {
      return null;
    }

    return (
        <div className="homepage">
        <div className="search-box">
          <SearchBar search={this.state.search} 
          handleInputChange={this.handleInputChange}
          handleKeyPress={this.handleKeyPress}/>
        </div>
        
        <div className="action-buttons">
          <ActionButtons />
        </div>

        <div className="title">
          <Heading>Top Rated Gists</Heading>
        </div>
        
        <div className="row">
          {
            this.state.results.map(result => (
              <ViewCard title={result.title}
              author={result.author.name}
              category={result.category}
              likes={result.liked}
              date={result.date}
              key={result._id}
              id={result._id}
              />
            ))
          }
        </div>
      </div>
    )
  } 
}

export default withRouter(Home);