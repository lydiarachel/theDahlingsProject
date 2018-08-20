import React from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import ViewCard from "../../components/ViewCard";
import ActionButtons from "../../components/ActionButtons";
import API from "../../utils/API";
import "./Search.css";

class Search extends React.Component {
  
  state = {
    results: [],
    search: "",
  }

  componentDidMount() {
    console.log(this.props.match.params)
    // Gettign params from the URL and use them as query to database
    if(this.props.match.params.category){
      this.fetchGistsByCategory();
    }
    if(this.props.match.params.query){
      this.fetchGistsBySearchString(this.props.match.params.query);
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

  // API request function for searching by sring from the search field
  fetchGistsBySearchString = (query) => {
    API.searchForGists(query) // looking for titles that have searched string inside
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ 
          results: res.data,
          search: "",
        });

        console.log("Results from search API", res.data)
      })
      .catch(err => this.setState({ error: err.message }));
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
      this.fetchGistsBySearchString(this.state.search);
    }
  };

  render() {
    return (
        <div>
        <div className="search-box">
          <SearchBar search={this.state.search} 
          handleInputChange={this.handleInputChange}
          handleKeyPress={this.handleKeyPress}/>
        </div>
        
        <div className="action-buttons">
          <ActionButtons />
        </div>

        <div className="title">
          {
            this.state.results.length === 0
            ? (
                <div>Results will be shown down below</div>
            ) : (
              <Heading>Search Results</Heading>
            )
          }
        </div>
        
        {
          this.state.results.length === 0
          ? (
            null
          ) : (
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
          )
        }
      </div>
    )
  } 
}

export default Search;