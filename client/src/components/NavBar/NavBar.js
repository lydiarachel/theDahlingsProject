import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = props => (
  <nav>
    <div className="nav-wrapper">
      <Link to='/' className="brand-logo">
        Get the Gist
      </Link>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <Link to='/'>
            Gist-egories
          </Link>
        </li>
        <li>
          <Link to='/search-results'>
            Search
          </Link>
        </li>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link to='/auth'>
            Log In/Sign Out
          </Link>
        </li>
      </ul>
    </div>
  </nav>      
);

export default NavBar;
