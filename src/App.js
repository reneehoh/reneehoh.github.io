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
    <Route path="/resume" component={Resume} />

    <div className="navigation">
    <div className="navigation-sub">
                                      
        // Set up the Links
        <Link to="/" className="item">Projects</Link>
        <Link to="/Writing" className="item">Articles</Link>
        <Link to="/About" className="item">About</Link>
        <Link to="documents/resume-renee.pdf" className="item">Resume</Link>

      </div>
    </div>
  </div>
</BrowserRouter>
    
  );
}

export default App;

