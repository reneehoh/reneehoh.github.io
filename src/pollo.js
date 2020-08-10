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
      <div class="content article-content">
        <Article
            image="images/pollo-thumbnail.png"
            title="Pollo is a tool for professors and students to interact"
            time="Spring 2020"
            team="Cornell AppDev"
            role="Product design, graphic design" 
            tools="Figma, Zeplin" />
      <h2>What does Pollo bring to the (classroom) table?</h2>
      <p></p>
      <h2>Launching Pollo</h2>
      <h3>Social media posters</h3>
        <div class="row">
        <img id="pollo-insta" src="images/pollo-insta.png" alt="Instagram poster for Pollo."/>
        <img id="pollo-fb" src="images/pollo-fb.png" alt="Facebook poster for Pollo."/>
        </div>
      <h3>App store graphics</h3>
      <img class="img-example" src="images/pollo-appstore.png" alt="App store poster for Pollo."/>
      <p>Download Pollo now in the <a href="https://apps.apple.com/us/app/pollo-polling-made-easy/id1355507891">
        App Store</a> or <a href="https://play.google.com/store/apps/details?id=com.cornellappdev.android.pollo">
        Google Play Store </a> today!</p>
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

export default Pollo;