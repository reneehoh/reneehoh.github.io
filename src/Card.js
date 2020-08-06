import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
 
function Card(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img className="project-image" src={props.image} alt="Project Image"/>
        </div>
        <div className="project-title">{props.title}</div>
        </Link>
        <div className="project-category">{props.category}</div>
        <div className="project-blurb">{props.blurb}</div>
    </div>
  )
}
 
export default Card;