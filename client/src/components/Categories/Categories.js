import React from "react";
import './Categories.css';

const Categories = props => (
    <ul id={props.listId} className={props.listClass}>
        <li><a href="#!">Art</a></li>
        <li><a href="#!">Bussines</a></li>
        <li><a href="#!">Culture</a></li>
        <li><a href="#!">History</a></li>
        <li><a href="#!">Science</a></li>
        <li><a href="#!">Tech</a></li>
        <li><a href="#!">Politics</a></li>
        <li><a href="#!">Popular</a></li>
    </ul>
);

export default Categories;