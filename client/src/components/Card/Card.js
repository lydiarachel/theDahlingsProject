import React from "react";
import './Card.css'

const Card = props =>(
 
      <div className="row">
        <div className="col s11 m11">
          <div className="card small">
          <div className="card-content white">
          <span className="card-title">{props.title}</span>
          {/*create a div that will have two p tags with className that are styled. This will allow me to place date and by 
          information on the card. need to write a props.date.  
          for body, need to have a div with p tag and className that is styled for the body of the*/}
          {props.body}
          {props.liked}
          </div>

          <div className="card-action">
                
          </div>
      </div>
    </div>
  </div>
)

export default Card;