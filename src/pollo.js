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
            title="Pollo: Ask, Answer, Analyze"
            time="Spring 2020"
            team="Cornell AppDev"
            role="Product design, graphic design" 
            tools="Figma, Zeplin" />
      <h2>What does Pollo bring to the (classroom) table?</h2>
      <h3>The problem at hand</h3>
      <p>Nowadays, some professors face the challenge of presenting material to
        On the other end of the lecture hall, students try their best to summarize
        the material in their notebooks or on their computer. 
      </p>
      <h2>Polling made easy</h2>
      <p>Pollo lets professors ask questions and take live polls through our mobile and web application.
        They can ask in-class questions and recieve real-time feedback to gauge which topics their students understand, and which ones they may
        need spend more time on. With Pollo:</p>
      <p><strong>Send live polls.</strong> Want to know how prepared students feel for the exam or test their comprehension
      of the lecture? Quickly create a live poll and send it out during class.</p>
      <p><strong>Create drafts.</strong> Plan ahead for your lecture by pre-filling the polls
      you intend on using during class.</p>
      <p><strong>Organize your groups</strong>. Your polls are labelled with the date they were sent out and
       organized into custom groups. Use this to see trends in the poll outcomes.</p>
       <p><strong>Receive live feedback.</strong> As users choose their answers, Pollo shows the results to 
       poll creators using easy-to-read percentages and data visualization.</p>
      <h2>Making Pollo my own</h2>
      <p>I joined the Pollo team when they had the goal of launching the app by the end of the semester. It was daunting to 
        familiarize myself with Figma files on Figma files of the Pollo designs that covered every possible interaction. I was tasked
        with 3 main issues to tackle before the upcoming launch:</p>
      <ol>
        <li>Visually representing which answer is correct to the student-side user.</li>
        <li>Notifying professors that they can export participation data.</li>
        <li>Create an identity and marketing artifacts for Pollo's launch.</li>
      </ol>
      <h2>1. How do I know which answer is correct?</h2>
      <p>In Pollo, poll creators can choose to assign an answer to be correct or not. If they do, after the share the results of the polls,
        poll users should be able to see which answer is correct. The existing solution did a great job of visually representing the correct answer
        and indicating which answer the user chose. However the solution posed two issues: </p>
        <ul>
          <li>Users could not tell if there is a correct answer, if no one chooses the correct answer. </li>
          <li>The green and gray did not contrast heavily, posing accessibility issue for colorblind users.</li>
        </ul>
        <img class="img-example" src="images/pollo-original.png" alt="Original correct answer solution."/>
        <p>I created iterations for indicating the correct answer while actively designing for both user considerations.</p>
        <img class="img-example img-spacing" src="images/pollo-color.png" alt="Accesibility correct answer solution."/>
        <img class="img-example" src="images/pollo-noanswer.png" alt="No correct answer solution."/>
        <p>Ultimately, I chose the solution that uses a thicker stroke and darker green color to indicate the correct poll. It does
        not rely solely on color as a visual indicator and is not confusing when no one chooses the correct answer.
         Therefore, it is a viable solution for both audiences.</p>
         <p>The final interaction for instructors and students:</p>
         <img class="img-example" src="images/pollo-flow.png" alt="Correct answer work flow."/>
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