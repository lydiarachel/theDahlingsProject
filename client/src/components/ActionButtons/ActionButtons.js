import React from 'react'
import { Link } from "react-router-dom";
import './ActionButtons.css'

const ActionButtons = props => (
    <ul className="action-buttons-list">
        <li>
            <Link to='/add-gist' className="btn-floating waves-effect waves-light grey lighten-5 action-btn btn-large tooltipped" data-position='left' data-tooltip='Write new Gist'><i className="material-icons teal-text lighten-2">create</i></Link>
        </li>
        <li>
            <Link to='/add-suggestion' className="btn-floating waves-effect waves-light grey lighten-5 action-btn btn-large tooltipped" data-position='left' data-tooltip='Make a suggestion'><i className="material-icons teal-text lighten-2">lightbulb_outline</i></Link>
        </li>
    </ul>
)

export default ActionButtons