import React from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import ViewCard from "../../components/ViewCard";
import ActionButtons from "../../components/ActionButtons";
import API from "../../utils/API";
import "./Home.css";

class Home extends React.Component {
  state = {
    search: "",
    gists: [],
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
      console.log('Enter was pressed');
      console.log("Search query", {title: {$regex: `*${this.state.search}*`}})

      // Request to the database
      API.findGists({title: {$regex: `*${this.state.search}*`}}) // look for titles that have searched string inside
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ 
          gists: res.data,
          search: "",
        });

        console.log("Results from search API", res.data)
      })
      .catch(err => this.setState({ error: err.message }));
    }
  }

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

export default Home;