import React from 'react';
import './App.css';
import App from "./App";
import Card from "./Card";

function Projects(props) {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet"
            href="styles/theme.css"
            media="all"/>
      <title>Renee Hoh</title>
    </head>
    <body>
      <header>
          <div class="row short">
          <img class ="logo" src="images/lef.svg" alt="Logo" />
          <p class="name">Renee Hoh</p>
        </div>
      </header>
      <main>
        <div class="row">
        <Card
            link="/spotify"
            image="images/spotify-cover.png"
            title="Spotify Concept: Collaborative queues"
            category="Product design"
        />
        <Card
            link="/google"
            image="images/google-cover.png"
            title="Google Technical Writing Internships"
            category="Technical writing, UX research"
        />
        </div>
        <div class="row">
        <Card
            link="/cornell-creatives"
            image="images/cc-cover.png"
            title="Cornell Creatives"
            category="Product design"
        />
        <Card
            link="/pollo"
            image="images/spotify-cover.png"
            title="Pollo"
            category="Product design, graphic design"
        />
        </div>
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

export default Projects;
