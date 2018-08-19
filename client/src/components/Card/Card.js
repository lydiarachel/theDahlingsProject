import React, { Component } from "react";
import API from '../../utils/API'
import "./Card.css";

class Card extends Component {
  handleClick = () => {
    if (this.props.method) {
      let updateLikes = this.props.liked + 1;
      let info = {
        likes: updateLikes,
        id: this.props.id
      };
      API.updateSuggestion({
        _id: info.id,
        liked: info.likes
      }).then(results => {
        console.log(results)
        if (results) {
          this.props.method();
        }
      });
    }
    else{
      this.props.updateLikes()
    }
  };
  render() {
    return (
      <div className="row gist-card-row">
        <div className="col s11 m11">
          <div className="card gist-card-styling">
            <div className="card-content white">
              <div>
                <h1 className="gist-title">{this.props.title}</h1>
              </div>
              <div>
                <p className="gist-date">{this.props.date}</p>
                <p className="gist-author">
                  <span className="bybyby"> by </span> {this.props.authorName}
                </p>
              </div>

              {/*create a div that will have two p tags with className that are styled. This will allow me to place date and by 
          information on the card. need to write a props.date.  
          for body, need to have a div with p tag and className that is styled for the body of the*/}
              <div>
                <p id="gist-body">{this.props.body}</p>
              </div>

              <div className="gist-footer">
                <div className="gist-category">
                  Category: {this.props.category}
                </div>
                <div className="gist-liked">
                  <button
                    to="#"
                    className="btn-floating waves-effect waves-light grey lighten-5 action-btn btn-large like-icon"
                    data-position="left"
                    data-tooltip="Like"
                    onClick={this.handleClick}
                  >
                    <i className="material-icons teal-text lighten-2">
                      favorite_border
                    </i>
                  </button>
                  {this.props.liked}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
