import React from 'react';
import './App.css';
import Article from "./Article";

function Pollo() {
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
            image="images/pollo-thumbnail.png"
            title="Pollo is a tool for professors and students to interact"
            time="Spring 2020"
            team="Cornell AppDev"
            role="Product design, graphic design" 
            tools="Figma, Zeplin" />

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

export default Pollo;