import React from "react";
import './Card.css'

const Card = props =>(
 
      <div className="row gist-card-row">
        <div className="col s11 m11">
          <div className="card gist-card-styling">
          <div className="card-content white">
          <div>
            <h1 className="gist-title">{props.title}</h1>
          </div>
          <div>
            <p className="gist-date">{props.date}</p>
            <p className="gist-author"><span className="bybyby"> by </span> {props.authorName}</p>
          </div>
          
          {/*create a div that will have two p tags with className that are styled. This will allow me to place date and by 
          information on the card. need to write a props.date.  
          for body, need to have a div with p tag and className that is styled for the body of the*/}
          <div>
            <p id="gist-body">{props.body}</p>
          </div>
        
            <div className="gist-footer">
            <div className="gist-category">Category: {props.category}</div>
            <div className="gist-liked">
            <a to='#' className="btn-floating waves-effect waves-light grey lighten-5 action-btn btn-large like-icon" data-position='left' data-tooltip='Like'><i className="material-icons teal-text lighten-2">favorite_border</i></a>  
            {props.liked}</div>
            </div>
          </div>
      </div>
    </div>
  </div>
)

export default Card;