import React from 'react';
import './App.css';
import Article from "./Article";

function Arcade() {
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
        <div class="content article-content">
        <Article
            image="images/arcade-thumbnail.png"
            title="Arcade connects seniors with gaming communities"
            time="Summer 2020; 10 weeks"
            team="Connie Liu, product designer"
            role="Product design, prototyping" 
            tools="Adobe XD, Figma" />
            
            <p>The Summer 2020 Activism Creative Jam challenged us to create a gaming platform in just 48 hours for a unique audience:
               elderly individuals looking to find a community through video games.
            </p>
          <h2>Onboarding flow</h2>
          <img class="img-example" src="images/arcade-onboarding.png" alt="Onboarding flow."/>
          <h2>Community pages</h2>
          <img class="img-example" src="images/arcade-community.png" alt="Community pages."/>
          <h2>Create a game flow</h2>
          <img class="img-example" src="images/arcade-create-game.png" alt="Create a game flow."/>
          <div class="center">
            <p><em>Case study coming soon!</em></p></div>
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

export default Arcade;
