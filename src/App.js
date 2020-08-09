import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Writing from './Writing.js'; 
import Projects from './Projects.js'; 
import About from './About.js'; 
import Pollo from './Pollo.js'; 
import Spotify from './Spotify.js'; 
import CornellCreatives from './cornell-creatives.js'; 
import UniPantry from './Unipantry.js'; 
import Arcade from './Arcade.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div class="header row">
          <div className="navigation-left">                             
          <Link to="/" className="item">Projects</Link>
          <Link to="/Writing" className="item">Writing</Link>
      </div>
        <div class="container">
            <div class="logo-container">
                <img class ="header-logo" src="images/squiggles.svg" alt="Logo" />
            </div>
            <div class="name-container">
                <Link to ="/" class="header-name">Renee Hoh</Link>
            </div>
        </div>
        <div className="navigation-right">
          <Link to="/About" className="item">About</Link>
          <a href="documents/reneehoh-resume2020.pdf" className="item">Resume</a>
        </div>
      </div>
      <Route exact path="/" component={Projects} />
      <Route path="/writing" component={Writing} />
      <Route path="/about" component={About} />
      <Route path="/spotify" component={Spotify} />
      <Route path="/pollo" component={About} />
      <Route path="/cornell-creatives" component={CornellCreatives} />
      <Route path="/unipantry" component={UniPantry} />
      <Route path="/arcade" component={Arcade} />
      <Route path="/pollo" component={Pollo} />
    </div>
 
  </BrowserRouter>
    
  );
}

export default App;

