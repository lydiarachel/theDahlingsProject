import React from "react"
import './Comment.css'
const Comment = props => {
  return (
    <div>
    <div className="row">
      <div className="col s6 m9 comment-body gist-body-comment">
          <p>{props.comment}</p>
      </div>
      <div className="col s6 m3 comment-body">
          <p className="gist-date right-align">{new Date(this.props.date).toLocaleString('en-US', {hour12:true})}</p>
          <p className="gist-comment-author right-align">by {props.authorName}
        </p>
      </div>
    </div>
    
    </div>
  );
};

export default Comment;
