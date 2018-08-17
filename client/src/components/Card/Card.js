import React from "react";

const Card = props =>(
 
      <div className="row">
        <div className="col s11 m11">
          <div className="card small">
           <div className="card-content white-text grey lighten-1">
              <span className="card-title">{props.title}</span>
           </div>
          <div className="card-content white">
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