import React from "react";
import "./ViewCard.css";
import { Link } from "react-router-dom";

const ViewCard = props => (
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-content white small-card">
              <h5 className="small-card-title"><Link to={`/gist/${props.id}`}>
                  {props.title}
                </Link>
              </h5>
              <div className="small-card-data">
                <p>by: {props.author}</p>
                <p>Category: <span className="gist-category">{props.category}</span></p>
              
                <p>Created at: {props.date}</p>
              </div>
              

              <div className="small-card-rating">
                <i className="material-icons small-card-icon">favorite_border</i> {props.likes}
              </div>
            
            </div>
          </div>
        </div>
);

export default ViewCard;