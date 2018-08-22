import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Gist from "./pages/Gist";
import NavBar from "./components/NavBar";
import './App.css';
import AddGist from './pages/AddGist';
import AddSuggestion from './pages/AddSuggestion';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import Suggestions from './pages/Suggestion/Suggestion';

import API from './utils/API'

class App extends Component {
  
  state = {
    user: {}
  }

  componentDidMount(){
    API.getAuthenticatedUser()
      .then(({ data: user}) => {
        console.log(user)
        this.setState({ user })
      })
  }
  
  render(){
    return(
      <Router>
        <div>
          <NavBar />

          <Route exact path="/" component={Home} />
          <Route exact path="/search-results" component={Search} />
          <Route exact path="/search-results/:query" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/gist/:id" component={Gist} />
          <Route exact path="/add-gist" component ={AddGist} />
          <Route exact path="/add-suggestion" component= {AddSuggestion} />
          <Route exact path="/search/:category" component= {Search} />
          <Route exact path="/create-profile" component= {CreateProfile} />
          <Route exact path="/suggestions" component= {Suggestions} />
          <Route exact path="/add-gist/:title/:category" component ={AddGist} />
        </div>
      </Router>
    )
  }
}



export default App;
