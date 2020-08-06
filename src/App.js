import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Writing from './Writing.js'; 
import Projects from './Projects.js'; 
import About from './About.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
      <Route exact path="/" component={Projects} />
      <Route path="/writing" component={Writing} />
      <Route path="/about" component={About} />
      <Route path="/documents/resume-renee.pdf"/>
      <div class="row">
          <div className="navigation-left">                             
          <Link to="/" className="item">Projects</Link>
          <Link to="/Writing" className="item">Writing</Link>
      </div>
        <div class="container">
            <div class="logo-container">
                <img class ="header-logo" src="images/squiggles.svg" alt="Logo" />
            </div>
            <div class="name-container">
                <p class="header-name">Renee Hoh</p>
            </div>
        </div>
        <div className="navigation-right">
          <Link to="/About" className="item">About</Link>
          <Link to="/Resume" className="item">Resume</Link>
        </div>
      </div>
    </div>
  </BrowserRouter>
    
  );
}

export default App;

