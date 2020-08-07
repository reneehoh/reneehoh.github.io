import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

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
        <section>
        <div class="row">
          <img src="images/profile.png" alt="Profile picture" class="profile" />
          <div class="intro">
            <h1> Hey there! I'm Renee.</h1>
            <p>I enjoy starting conversations and connecting with people –– whether it's through writing or design. I'm a big believer in accessibility of information and helping my community make informed choices. </p>
            <p> I spent last summer as a technical writing intern, writing developer-facing documentation for <a href="https://firebase.google.com/">@Firebase</a> at Google San Francisco. I worked with software engineers to create step-by-step tutorials
              and with UX designers to create relevant mockups to help users navigate Firebase's exciting features.</p>
            <p>When I'm in Ithaca, I am a product designer for <a href="https://www.cornellappdev.com/">@AppDev</a>, design for <a href="http://cornellcreatives.com/"> @CornellCreatives</a> and write news articles for <a href="https://cornellsun.com/">@TheCornellDailySun</a>.</p>
            <p> Start a conversation with me at <a href="mailto:renee.hoh@gmail.com">renee.hoh@gmail.com</a>!</p>
          </div>
          </div>
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

export default About;
