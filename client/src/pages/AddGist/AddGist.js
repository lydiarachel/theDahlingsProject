import React from "react";
import SearchBar from "../../components/SearchBar";
import Heading from "../../components/Heading";
import GistForm from "../../components/GistForm";

const AddGist = () => (
  <div>
    <div className="search-box">
      <SearchBar />
    </div>

    <div className="title">
      <Heading>Add Gist</Heading>
    </div>

    <div className="row" />
    <GistForm />
  </div>
);

export default AddGist;
