import React from 'react';
import './App.css';
import Article from "./Article";
import { Link} from 'react-router-dom'; 

function Google() {
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
            image="images/google-thumbnail.png"
            title="Technical Writing @ Google"
            time="Summer 2020, Summer 2019"
            team="Android Partner Engineering (2020)
            Firebase (2019),"
            role="Technical writer intern" 
            tools="HTML/CSS, Markdown, Google internal tools, Figma" />
<p> </p>
<p>The writing and design process for my internship deliverables are protected. However, feel free to read
    my writing for Firebase and APE <Link to="/Writing">public documentation</Link>.
</p>
<p>For Google interns or employees, visit /rhoh-preso-2020 to view my summer 2020 intern presentations.</p>
    <p>Otherwise,<a href="mailto:renee.hoh@gmail.com"> contact me</a> to talk more about my internships!</p>
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

export default Google;
