import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";
import './NavBar.css';

const NavBar = props => (
  <div>
    <nav className="nav-extended">
      <div className="nav-wrapper">

        {/* Logo */}
        <Link to='/' className="brand-logo">
          Get the Gist
        </Link>

        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="dropdown-trigger" href="#!" data-target="dropdown1">Gist-egories<i className="material-icons right">arrow_drop_down</i></a>
          </li>
          <li>
            <Link to='/search-results' className="waves-effect">
              Search
            </Link>
          </li>
          <li>
            <Link to='/about' className="waves-effect">
              About
            </Link>
          </li>
          <li>
            <Link to='/auth' className="waves-effect">
              Log In/Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>   

    {/* Sidebar */}
    <SideBar />

    {/* Dropdown Structure */}
    <ul id='dropdown1' className='dropdown-content'>
      <li><a href="#!">Art</a></li>
      <li><a href="#!">Business</a></li>
      <li><a href="#!">Culture</a></li>
      <li><a href="#!">History</a></li>
      <li><a href="#!">Science</a></li>
      <li><a href="#!">Tech</a></li>
      <li><a href="#!">Politics</a></li>
      <li><a href="#!">Popular</a></li>
    </ul>
  </div>
);

export default NavBar;
