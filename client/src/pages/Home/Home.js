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
    gists: [],
    error: ""
  }
  
  componentDidMount() {
    console.log(this.props)
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
    this.setState({
      search: event.target.value,
    }, (event) => {
    if(this.state.search.length > 0){
      API.searchForGists(this.state.search) // looking for titles that have searched string inside
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ 
          gists: res.data,
        });
        console.log("Results from search API", res.data)
      })
      .catch(err => this.setState({ error: err.message }));
    }
    });
  }

  clearSearchbar = () => {
    this.setState({ 
      search: '',
      gists: [],
    });
  }

  sortingByLikes = () => {
    const forSort = [].concat(this.state.results)
    .sort((a, b) => {
      if (a.liked < b.liked) {
        return 1;
      }
      if (b.liked < a.liked) {
        return -1;
      }
      return 0;
    })

    return forSort;
  }

  render() {
    // don't render the page untill state.results populate
    if (this.state.results.length === 0) {
      return null;
    }

    return (
        <div className="homepage">

          <div className={"action-buttons " + this.props.hide}>
            <ActionButtons />
          </div>

          <SearchBar
            search={this.state.search} 
          handleInputChange={this.handleInputChange}
            handleKeyPress={this.handleKeyPress}
            clearSearchbar={this.clearSearchbar}
          />

          {
            (this.state.gists.length > 0) ?
              <div className="title">
                <Heading>Search Results</Heading>
              </div>
              :
              null
          }
          
          <div className="row">
            {
              (this.state.gists.length > 0) ?

              this.state.gists.map(result => (
                <ViewCard title={result.title}
                author={result.author.name}
                category={result.category}
                likes={result.liked}
                date = {new Date(result.date).toLocaleString('en-US',{hour12:true})}
                comments={result.comments}
                key={result._id}
                id={result._id}
                />
              ))
               : null
            }
          </div>
  
          <div className="title">
            <Heading>Top Rated Gists</Heading>
          </div>
          
          <div className="row">
            {
              this.sortingByLikes().slice(0, 9).map(result => (
                <ViewCard title={result.title}
                author={result.author.name}
                category={result.category}
                likes={result.liked}
                date={result.date}
                comments={result.comments}
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