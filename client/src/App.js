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



class App extends Component {
  
  render(){
    return(
      <Router>
        <div>
          <NavBar />

          <Route exact path="/" component={Home} />
          <Route exact path="/search-results" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/gist-page" component={Gist} />
          <Route exact path = '/add-gist' component ={AddGist} />
        </div>
      </Router>
    )
  }
}



export default App;
