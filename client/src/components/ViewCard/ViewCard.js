import React, { Component } from "react";
class ViewCard extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col l10">
          <div className="card medium">
            <div className="card-content white-text grey lighten-1">
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content white">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCard;
