import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
 
function Article(props) {
  return (
    <div className="article">
        <div className="article-cover">
          <img className="article-cover" src={props.image} alt="Article cover"/>
        </div>
        <div className="article-title">{props.title}</div>
        <div className="article-category">{props.category}</div>
        <div>
            <div className="article-timeline">{props.timeline}</div>
            <div className="article-team">{props.team}</div>
            <div className="article-focus">{props.focus}</div>
            <div className="article-timeline">{props.timeline}</div>
        </div>
    </div>
  )
}
 
export default Article;