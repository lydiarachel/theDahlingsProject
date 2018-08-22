import React from "react";
import './SearchBar.css';

const SearchBar = props => (
    <div className="search-box">
      <form>
        <div className="input-field search-field">
          <input 
          value={props.search} 
          onChange={props.handleInputChange} 
          onKeyPress={props.handleKeyPress} 
          name="gist"
          id="search" 
          type="search" 
          placeholder="Search for the gist" 
          autoComplete="off"
          required />
          <label className="label-icon" htmlFor="search"><i className="material-icons search-icon">search</i></label>
          <i className="material-icons" onClick={props.clearSearchbar}>close</i>
        </div>
      </form>
    </div>
);

export default SearchBar;
