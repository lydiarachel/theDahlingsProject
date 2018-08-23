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
                <p>by <span className="small-card-author">{props.author}</span></p>
                <p>Category: <span className="samall-card-category">{props.category}</span></p>
              
                <p>{new Date(props.date).toLocaleString()}</p>
              </div>
              

              <div className="small-card-rating">
                <span>
                  <i className="material-icons small-card-icon">chat_bubble_outline</i> {props.comments.length}
                </span>
                <span>
                  <i className="material-icons small-card-icon">favorite_border</i> {props.likes}
                </span>
                
              </div>
            
            </div>
          </div>
        </div>
);

export default ViewCard;