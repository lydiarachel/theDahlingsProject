import React from 'react'
import './ActionButtons.css'

const ActionButtons = props => (
    <ul>
        <li><a className="btn-floating waves-effect waves-light grey lighten-5 action-btn tooltipped" data-position='right' data-tooltip='Write new Gist'><i className="material-icons teal-text lighten-2">create</i></a></li>
        <li><a className="btn-floating waves-effect waves-light grey lighten-5 action-btn tooltipped" data-position='right' data-tooltip='Reccomended Gists'><i className="material-icons teal-text lighten-2">lightbulb_outline</i></a></li>
    </ul>
)

export default ActionButtons