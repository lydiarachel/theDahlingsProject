import React from 'react'
import './Heading.css'

const Heading = props => (
    <div>
        <h4 className="heading">{props.children}</h4>
    </div>
)

export default Heading