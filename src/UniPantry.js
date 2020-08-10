import React from 'react';
import './App.css';
import Article from "./Article";

function UniPantry() {
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
            image="images/unipantry-thumbnail.png"
            title="UniPantry: a tool for meal prepping &amp; healthy eating"
            time="March 2020 - Present"
            team="Sharon Li, product designer"
            role="Product design, prototyping" 
            tools="Figma" />
<p> </p>
<p>Thanks for you interest in UniPantry! This project is protected by a NDA, so I'm unable to share the details of
    the design process or the UI of the app publicly until after it launches.</p>
    <p><a href="mailto:renee.hoh@gmail.com">Contact me</a> to talk more about this project or visit <a href="https://unipantry.net/">the 
    UniPantry website</a>.</p>
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

export default UniPantry;