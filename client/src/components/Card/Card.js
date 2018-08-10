import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="row">
      <div className="col s6 m3">
        <div className="card small">
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

export default Card;