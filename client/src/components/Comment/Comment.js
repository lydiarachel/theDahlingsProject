import React from "react"
import './Comment.css'
const Comment = props => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card gist-card-styling">
          <div className="card-content white body">
            <div>
              <p id="comment-body">{props.comment}</p>
            </div>
           
            
              <p className="gist-date right-align">{props.date}</p>
              <p className="gist-author right-align">
                <span className="bybyby"> by </span> {props.authorName}
              </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
