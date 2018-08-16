import React from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import ViewCard from "../../components/ViewCard";
import ActionButtons from "../../components/ActionButtons";
import API from "../../utils/API";
import "./Home.css";

class Home extends React.Component {
  state = {
    results: []
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

  render() {
    // don't render the page untill state.results populate
    if (this.state.results.length === 0) {
      return null;
    }

    return (
        <div>
        <div className="search-box">
          <SearchBar />
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

export default Home;