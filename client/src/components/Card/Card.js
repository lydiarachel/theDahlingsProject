import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  handleClick = () => {
      let updateLikes = this.props.liked + 1;
      let info = {
        likes: updateLikes,
        id: this.props.id
      };
      this.props.method(info)
      console.log(new Date(this.props.date).toLocaleString())
  };
  render() {
    return (
      <div className="row gist-card-row">
        <div className="col s10 offset-s1 m10 offset-m1 l11">
          <div className="card gist-card-styling">
            <div className="card-content white">
              <div>
                <h1 className="gist-title">{this.props.title}</h1>
              </div>
              <div>
                <p className="gist-date">{new Date(this.props.date).toLocaleString()}</p>
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
                    <i className="material-icons  cyan-text accent-4">
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
