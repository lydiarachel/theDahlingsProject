import React from "react";
import "./ViewCard.css";
import { Link } from "react-router-dom";

const ViewCard = props => (
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-content white-text grey lighten-1">
              <span className="card-title">
                <Link to="/gist-page">
                  Gist Tile
                </Link>
              </span>
            </div>
            <div className="card-content white">
            </div>
          </div>
        </div>
);

export default ViewCard;