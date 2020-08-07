import React from 'react';
import './App.css';
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
      <script src="scripts/jquery-3.4.1.min.js" type="text/javascript"></script>
      <script src="scripts/accordion.js" type="text/javascript"></script>
      <title>Renee Hoh</title>
    </head>
    <body>
      <main class="project-main">
        <div class="row">
        <Card
            link="/spotify"
            image="images/spotify-cover.png"
            title="Spotify Concept: Collaborative queues"
            category="Product design"
            blurb="Creating memories with a collaborative queues feature. 10-week product sprint for 
            Cornell AppDev's Intro to Digital Product Design course."
        />
        <Card
            link="/google"
            image="images/google-cover.png"
            title="Google Technical Writing Internships"
            category="Technical writing, UX research"
            blurb="Writing release documentation and designing informational graphics. Contact me for more details on this project."
        />
        </div>
        <div class="row">
        <Card
            link="/cornell-creatives"
            image="images/cc-cover.png"
            title="Cornell Creatives"
            category="Product design"
            blurb="Branding and designing graphics to promote Cornell Creative's mission of empowering student creators."
        />
        <Card
            link="/pollo"
            image="images/pollo-cover.png"
            title="Pollo"
            category="Product design, graphic design"
            blurb="A clicker alternative and classroom tool to keep professors and students engaged."
        />
        </div>
        <div class="row">
        <Card
            link="/UniPantry"
            image="images/unipantry-cover.png"
            title="UniPantry"
            category="Product design, UX research"
            blurb="A startup dedicated to helping college students meal prep and budget their money. My work for this project
            is protected under NDA. Please email me for more details"
        />
        <Card
            link="/Arcade"
            image="images/arcade-cover.png"
            title="Arcade: Summer 2020 Adobe Creative Jam"
            category="Product design"
            blurb="An app concept to recommend games to senior citizens. Case study coming soon!"
        />
        </div>
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
