import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Gist from "./pages/Gist";
import NavBar from "./components/NavBar";
import "./App.css";
import AddGist from "./pages/AddGist";
import AddSuggestion from "./pages/AddSuggestion";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import Suggestions from "./pages/Suggestion/Suggestions";

import API from "./utils/API";

class App extends Component {
  state = {
    user: {},
    hide: "hide",
    show: "",
    name: ''
  };

  componentDidMount() {
    API.getAuthenticatedUser(this.state.user).then(({ data: user }) => {
      this.setState({ user });
      if (user) {
        this.setState({ hide: "" , show: 'hide',
      name: this.state.user.name.split(' ')[0]});
      }
    });
  }
  logOut = () => {
    console.log('this is working')
    API.logOut().then(({ data: user }) => {
      console.log(user)
      this.setState({ user });
      if (!user) {
        this.setState({ hide: "hide" });
        this.setState({ show: "" });
      }
    });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar
            logOut={this.logOut}
            show={this.state.show}
            hide={this.state.hide}
            user={this.state.user}
            name={this.state.name}
          />

          <Route
            exact
            path="/"
            render={ props => <Home 
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
           
          />
          <Route
            exact
            path="/search-results"
            render={ props => <Search 
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path="/search-results/:query"
            render={ props => <Search 
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/auth"
            render={ props => <Auth 
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path="/gist/:id"
            render={ props => <Gist 
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path="/add-gist"
            render={ props => <AddGist
              {...props} 
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path="/add-suggestion"
            render={ props => <AddSuggestion
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path="/search/:category"
            render={ props => <Search
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <Route
            exact
            path="/suggestions"
            render={ props => <Suggestions 
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path="/add-gist/:title/:category"
            render={ props => <AddGist
              {...props}
              show={this.state.show}
              hide={this.state.hide}
              user={this.state.user}
            />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
