import React from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import ViewCard from "../../components/ViewCard";
import ActionButtons from "../../components/ActionButtons";
import API from "../../utils/API";
import "./Search.css";

class Search extends React.Component {
  state = {
    results: []
  }

  componentDidMount() {
    // Gettign params from the URL and use them as query to database
    if(this.props.match.params.category){
      this.fetchGistsByCategory();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      // Category has changed - Need to fetch again
      this.fetchGistsByCategory();
    }
  }

  // API request function for searching by category
  fetchGistsByCategory = () => {
    API.findGists(this.props.match.params)
      .then(result => {
        console.log(result.data);
        this.setState({
          results: result.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    
    return (
        <div>
        <div className="search-box">
          <SearchBar />
        </div>
        
        <div className="action-buttons">
          <ActionButtons />
        </div>

        <div className="title">
          <Heading>Search Results</Heading>
        </div>
        
        <div className="row">
          {
            this.state.results.map(result => (
              <ViewCard title={result.title}
              author={result.author}
              category={result.category}
              likes={result.liked}
              date={result.date}
              key={result._id}
              />
            ))
          }
        </div>
      </div>
    )
  } 
}

export default Search;