import React from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import './SideBar.css';

const SideBar = props => (
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
          <Categories listId={null} listClass={null}/>
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
);

export default SideBar;