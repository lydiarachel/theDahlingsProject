import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import Auth from "./pages/Auth";
import NavBar from "./components/NavBar";
import './App.css';



const App = () => (
  <Router>
    <div>
      <NavBar />
      <Heading>Git the Gist</Heading>

      <Route exact path="/" component={Home} />
      <Route exact path="/search-results" component={Search} />
      <Route exact path="/about" component={About} />
      <Route exact path="/auth" component={Auth} />
    </div>
  </Router>
);


export default App;
