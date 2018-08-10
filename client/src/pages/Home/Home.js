import React from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import ViewCard from "../../components/ViewCard";
import "./Home.css";

const Home = () => (
  <div>
    <div className="search-box">
      <SearchBar />
    </div>
    
    <div className="title">
      <Heading>Top Rated Gists</Heading>
    </div>
    
    <div className="row">
      <ViewCard />
      <ViewCard />
      <ViewCard />
      <ViewCard />
      <ViewCard />
      <ViewCard />
    </div>
  </div>
);

export default Home;