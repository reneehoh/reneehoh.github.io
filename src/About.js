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
      <main class="about-main">
        <section>
        <div class="row">
          <img src="images/profile.png" alt="Profile picture" class="profile" />
          <div class="intro">
            <h1> Hey there! I'm Renee.</h1>
            <p>I'm curious about the way each person navigates the earth, and so I strive to understand them and their everyday frustrations –– whether it's through writing or design. I'm a big believer in information accessibility and helping my community make informed choices. </p>
            <p>I'm a rising junior at Cornell University, studying information science with a concentration in user experience.
            When I'm in Ithaca, I design apps for <a href="https://www.cornellappdev.com/">@AppDev</a>, create illustrations for <a href="http://cornellcreatives.com/"> @CornellCreatives</a>, and write for <a href="https://cornellsun.com/">@TheCornellDailySun</a>.</p>
            <p>This summer, I'm a returning technical writer intern for <a href="https://www.source.android.com/">@AndroidPartnerEngineering</a>, writing documentation for the upcoming Android release. Previously, I was a technical writer intern for <a href="https://firebase.google.com/">@Firebase</a> at Google San Francisco.</p>
            <p>In my downtime, I dabble in film photography, (try to) complete NYT crossword puzzles, and browse creative branding initiatives. </p>
            <p>Start a conversation with me at <a href="mailto:renee.hoh@gmail.com">renee.hoh@gmail.com</a>!</p>
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
