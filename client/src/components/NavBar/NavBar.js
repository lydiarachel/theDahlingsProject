import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";
import categories from "../../utils/Categories";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-extended fixed">
          <div className="nav-wrapper">

            {/* Logo */}
            <Link to='/' className="brand-logo">
              <div className="gist-logo">
                <span id="gist-logo-horizontal">get the</span>
                <span id="gist-logo-vertical">gist</span>
              </div>
             
            </Link>

            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                  Gist-egories<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <Link to='/about' className="waves-effect waves-light">
                  About
                </Link>
              </li>
              <li>
                <Link to= '/suggestions' className='waves-effect waves-light'>
                Suggestions
                </Link>
              </li>
              <li>
                <Link to='/auth' className="waves-effect waves-light">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>   

        {/* Sidebar */}
        <SideBar />

        {/* Dropdown Structure */}
        <ul id='dropdown1' className="dropdown-content">
          {
            categories.map((category) => {
              return <li 
              data-id={category.id} 
              key={category.id}>
                <Link to={`/search/${category.id}`}>{category.label}</Link>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default NavBar;
