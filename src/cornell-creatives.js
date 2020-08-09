import React from 'react';
import './App.css';
import Article from "./Article";

function CornellCreatives() {
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
      <div class="content">
        <Article
            image="images/cc-thumbnail.png"
            title="Branding and designing for Cornell Creatives"
            time="Spring 2020"
            team="Sharon Li, Brand Lead"
            role="Product design, graphic design, marketing materials" 
            tools="Figma, Adobe Photoshop" />
      <img class="img-example" src="images/cc-logos.png" alt="Explorations of Cornell Creatives logos."/>
<img class="img-example" src="images/cc-illustrations.png" alt="Flat illustrations for each Cornell Creatives medium."/>
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

export default CornellCreatives;