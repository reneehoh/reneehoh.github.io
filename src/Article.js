import React from 'react';
import './App.css';
 
function Article(props) {
  return (
    <div className="article">
        <div className="article-cover">
          <img className="article-cover" src={props.image} alt="Article cover"/>
        </div>
        <div className="article-title">{props.title}</div>
        <div className="article-category">{props.category}</div>
        <div class="row details">
            <div class="detail">
                <p><strong>Time Frame</strong></p>
                <div className="article-time">{props.time}</div> 
            </div>
            <div class="detail">
                <p><strong>My Role</strong></p>
                <div className="article-time">{props.role}</div> 
            </div>
            <div class="detail">
                <p><strong>Tools</strong></p>
                <div className="article-time">{props.tools}</div> 
            </div>
            <div class="detail">
                <p><strong>The Team</strong></p>
                <div className="article-time">{props.team}</div> 
            </div>
        </div>
    </div>
  )
}
 
export default Article;