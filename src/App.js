import React from 'react';
import './App.css';

function App() {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet"
            href="styles/theme.css"
            media="all"/>
      <style>
          @import url('https://fonts.googleapis.com/css?family=Avenir&display=swap');
      </style>
      <title>Renee Hoh</title>
    </head>
    <body>
      <header>
        <nav>
          <div class="row short">
          <img class ="logo" src="images/lef.svg" alt="Logo" />
          <p class="name">Renee Hoh</p>
            <ul class="row nav">
              <li><a href="App.js">Projects</a></li>
              <li><a href="Writing.js">Writing</a></li>
              <li><a href="#/About">About</a></li>
              <li><a href="documents/resume-renee.pdf">Resume</a></li>
            </ul>
        </div>
        </nav>
      </header>
      <main>
        <section class="row">
          <section class="col design">
            <a href="https://medium.com/@renee.hoh/spotify-concept-creating-memories-with-collaborations-558b2a3f4ca3">
            <img class="cover" src="images/spotify-cover.png" alt="Spotify project cover" id="spotify" />
            <p>Spotify Concept: Collaborative queues</p> </a>
          </section>
          <section class="col design">
            <a href="https://medium.com/@renee.hoh/spotify-concept-creating-memories-with-collaborations-558b2a3f4ca3">
            <img class="cover" src="images/google-cover.png" alt="Google project cover" id="google" />
            <p>Google technical writing internships</p> </a>
          </section>
          </section>
      <section class="row">
      <section class="col design">
          <a href="venmo.html">
            <img class="cover" src="images/cc-cover.png" alt="Cornell Creatives project cover" id = "cc" />
            <p>Cornell Creatives</p> </a>
          </section>
      <section class="col design">
        <a href="venmo.html">
          <img class="cover" src="images/pollo-cover.png" alt="Pollo project cover" id = "pollo" />
          <p>Pollo</p> </a>
        </section>
        </section>
      </main>
    
      <footer>
        <div class="icons">
          <a href="https://linkedin.com/renee-hoh"><img src="images/linkedin-icon.svg" alt="Link to Linkedin account." /></a>
          <a href="mailto:renee.hoh@gmail.com"><img src="images/email.svg" alt="Link to email." /></a>
        </div>
        <p class="made-by"> Thanks for scrolling! ❥ Made by Renee </p>
      </footer>
    </body>
    </html>
    
  );
}

export default App;
