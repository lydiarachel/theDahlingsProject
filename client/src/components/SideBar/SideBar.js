import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import categories from "../../utils/Categories";
import API from "../../utils/API";
import './SideBar.css';

class SideBar extends Component {

  onCategoryClick = (categoryId) => {
    API.getCategoryGist(categoryId)
        .then(result => {
            console.log(result);
            
            // do something with the results here
            <Redirect push to="/search-results" />
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <ul id="slide-out" className="sidenav">
    {/* Logo */}
    <li>
      <h4>
        <Link to='/' className="brand-logo">
          Get the Gist
        </Link>
      </h4> 
    </li>
    
    {/* Collapsible Gistegories for Sidebar*/}
    <ul className="collapsible collapsible-accordion">
      <li>
        <a className="collapsible-header waves-effect"><i className="material-icons">folder</i>Gist-egories</a>
        <div className="collapsible-body">
          <ul>
            {
              categories.map((category) => {
                return <li data-id={category.id} 
                key={category.id}
                onClick={() => this.onCategoryClick(category.id)}
                ><a href="#!">{category.label}</a></li>
              })
            }
          </ul>
        </div>
      </li>
    </ul>

    <li><div className="divider"></div></li>

    {/* Links for the Sidebar */}
    <li>
      <Link to='/search-results' className="waves-effect">
        <i className="material-icons">search</i>Search
      </Link>
    </li>
    <li>
      <Link to='/about' className="waves-effect">
        <i className="material-icons">info</i>About
      </Link>
    </li>
    <li>
      <Link to='/auth' className="waves-effect">
        <i className="material-icons">account_circle</i>Log In/Sign Out
      </Link>
    </li>
  </ul>
    )
  }
  
}

export default SideBar;