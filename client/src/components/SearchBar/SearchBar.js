import React from "react";
import './SearchBar.css';

const SearchBar = props => (
    <div className="nav-wrapper search-box">
      <form>
        <div className="input-field grey lighten-1">
          <input 
          value={props.search} 
          onChange={props.handleInputChange} 
          onKeyPress={props.handleKeyPress} 
          name="gist"
          id="search" 
          type="search" 
          placeholder="Search for the gist" 
          required />
          <label className="label-icon" htmlFor="search"><i className="material-icons search-icon">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
);

export default SearchBar;
