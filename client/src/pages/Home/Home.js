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
    error: "",
    hide: "hide",
    user:{}
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

        API.getAuthenticatedUser()
            .then(user => {
              console.log(user.data.message)
                if (!(user.data.message == 'Route not found')) {
                    this.setState({ user: user.data })
                    this.setState({ hide: ''})
                } else {
                    return
                }
                console.log(this.state.hide)
                console.log(this.state.user)
            })
  
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

          <SearchBar search={this.state.search} 
          handleInputChange={this.handleInputChange}
          handleKeyPress={this.handleKeyPress}/>
   
        
        <div className={"action-buttons " + this.state.hide}>
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