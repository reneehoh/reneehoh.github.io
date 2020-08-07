import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Article from "./Article";

function About() {
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
      <main>
        <Article
            image="images/spotify-thumbnail.png"
            title="Spotify Concept: Creating memories with collaborative queues"
            category=""
            time="10 weeks"
            team="Intro to Digital Product Design course"
            focus="Product design" />
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

export default About;
