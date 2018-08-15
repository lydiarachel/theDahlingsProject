import React from "react";
import "./ViewCard.css";
import { Link } from "react-router-dom";

const ViewCard = props => (
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-content white">
              <h5><Link to="/gist-page">
                  {props.title}
                </Link>
              </h5>
              
              <p>Author: {props.author}</p>
              <p>Category: {props.category.charAt(0).toUpperCase()+ props.category.slice(1)}</p>
              <p><i className="tiny material-icons search-icon">thumb_up</i> {props.likes}</p>
              <p>Created at: {props.date}</p>
            
            </div>
          </div>
        </div>
);

export default ViewCard;