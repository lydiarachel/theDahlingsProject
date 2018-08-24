import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Suggestion.css";
class Suggestion extends Component {
  handleClick = () => {
    let updateLikes = this.props.liked + 1;
    let info = {
      likes: updateLikes,
      id: this.props.id
    };
    this.props.method(info);
  };
  render() {
    return (
      <div>
        <div className="row suggestion-row">
            <div className="col s12 m9 suggestion-body">
              <h4 className="suggestion-title">{this.props.title}</h4>
              <p>{this.props.body}</p>
            </div>
            <div className="col s12 m3 suggestion-body">
              <div className="gist-liked right-align">
                <button
                  to="#"
                  className="btn-floating waves-effect waves-light grey lighten-5 action-btn btn-large like-icon"
                  data-tooltip="Like"
                  onClick={this.handleClick}
                >
                  <i className="material-icons cyan-text accent-4">
                    favorite_border
                  </i>
                </button>
                <Link
                  to={`/add-gist/${this.props.title}/${this.props.category}`}
                  className="btn-floating waves-effect waves-light grey lighten-5 action-btn btn-large tooltipped add-gist"
                  data-position="left"
                  data-tooltip="Write new Gist"
                >
                  <i className="material-icons cyan-text accent-4">create</i>
                </Link>
              </div>
              <p className="gist-date right-align">
                {new Date(this.props.date).toLocaleString()}
              </p>
              <p className="gist-comment-author right-align">
                by {this.props.authorName}
              </p>
            </div>
            <div className="col s6 m9">
              <p className="suggestion-category">Category: {this.props.category}</p>
            </div>
            <div className="col s6 m3 right-align">
              <span className="right-align">
                <i className="material-icons small-card-icon">favorite_border</i> <span className="white-text">{this.props.liked}</span>
              </span>
            </div>
          </div>
      </div>
    );
  }
}

export default Suggestion;
