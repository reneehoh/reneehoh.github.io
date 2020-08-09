import React from 'react';
import './App.css';
import Article from "./Article";

function Spotify() {
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
            image="images/spotify-thumbnail.png"
            title="Spotify Concept: Creating memories with collaborative queues"
            time="10 weeks"
            team="Intro to Digital Product Design course"
            role="Product design, user research" 
            tools="Figma, Invision" />
        <p><em>This case study was created for Intro to DPD; I am in no way affliated with Spotify.</em></p>
        <h2>What Spotify does for its users</h2>
        <p>
            Spotify does a lot of things well. There’s no doubt as to why it’s one of the
             top music-streaming apps on the market:<ul>
            <li>It gives users like me more control to customize their music than the radio does</li>
            <li>Users get access to millions of streamable songs with or without a subscription</li>
            </ul>
            Yet, I find that I rarely use it socially.
            Yeah, sometimes I’ll scroll through my friend’s playlist or try to collaborate on
             a playlist. But it’s not a big part of my Spotify experience.
            I believe community members informing one another on the latest news,
             trends, or even songs, is a valuable interaction that Spotify could further encourage.
            </p>
        <h2>User research</h2>
        <p>
            I spoke to frequent Spotify users to see how they used the music app in their day-to-day.
            I focused on how they explore music and archive the songs they enjoy. I found that:
            <ol>
                <li>
                    Users don't see self-made playlists as the easiest way... <em>("It's too tedious to maintain")</em>
                </li>
                <li>
                    ...Or the most organized way to curate their music <em>("I end up creating one large playlist")</em>
                </li>
                <li>
                    Users explore new music with Spotify-made playlists, rather than friends <em>("Repetition is boring")</em>
                </li>
            </ol>
            It seems that users are not <em>creating personalized playlsits</em> that they could share with friends, 
            because they don't want to <strong>overthink</strong> or <strong>agonize</strong> over the process. Instead,
            users often rely on the "skip" and "queue" features to customize their experiences.
        </p>
        <h2>Potentional gamechangers?</h2>
        <p>I was curious how other popular music apps encouraged users to create playlists that can be shared.
            Surprisingly, there was little difference among competitiors' workflows -- a "New Playlist" button. This made me realize that
            this entry point makes the process of curating a playlist less <em>organic</em>.
        </p>
        <h2>Brainstorming</h2>
        <p>
            With the help of 2 friends, I covered an entire wall with sticky notes, identifying specific
            issues users face with Spotify.
            How might we:
            <ul>
                <li>Make it easier to share music?</li>
                <li>Encourage collaboration?</li>
                <li>Make Spotify more interactive?</li>
            </ul>
            After sketching potentional UIs for 3 different solutions, I decided on a 
             <strong> collaborative queue</strong> feature because it focused on <strong>active interaction,</strong>
             and had high feasibility/impact.
        </p>
        <img class="img-example" src="images/spotify-sketch.png" alt="Sketch of collaborative queue feature."/>
        <p>
            To differentiate my product from Spotify's social listening feature, which was in-the-works at the time, 
            I conducted another round of market research. I found Google Music's save queue feature, which allowed 
            users to create a playlist from their queue.
        </p>
        <h2>My Proposed Solution 💡</h2>
        <p>
        I wanted to implement a Collaborative Queue feature in Spotify where users can create/join a session and any member can add songs to the same queue.
        When a user leaves the session, they will have the option of creating a new playlist from
        the songs that were queued in the session to remember that moment or event.</p>
        <p>
        The collaborative queue is intended to be more interactive and an in-the-moment activity.
        I imagine this being used for road trips, (themed) parties, etc. when music is played over a speaker. </p>
        <p>While Spotify is primarily a music streaming app, I think it’s important for users to start
        conversations outside of the app itself, and to use music to create new collaborations or friendships.</p>
        <h2>Iterating, iterating, iterating</h2>
        <h3>Entry point explorations</h3>
        <p>The most important medium-fidelity explorations was the entry point for the collaborative queue.</p>
            <img class="img-example" src="images/spotify-entry-point.png" alt="Medium fidelity explorations of entry points."/>
            <p>
            Ultimately, I choose option C because it associated the collaborative queue featuring with the existing queue feature, creating
            <strong>a sense of familiarity for users</strong>. Additionally, this entry point <strong>allowed users to listen at the same time while not physically
            together</strong>, as required by option B.
            </p>
        <h3>Sharing queue explorations</h3>
            <img/>
            <p>
            I chose this because...
            </p>
        <h3>Queue playlist page explorations</h3>
            <img/>
            <p>
            I chose this because...
            </p>
        <h2>Entering the realm of visual design:</h2>
        <h3>UI Kit</h3>
        <h2>Introducing the prototype 🎉</h2>
        <img class="img-example" src="images/spotify-prototype.png" alt="Prototype of full Spotify workflow."
        />
        <div class="gif-container">
            <img class="gif-example" src="assets/spotify-prototype.gif" alt="Gif of full Spotify workflow."/>
        </div>
        <h2>Reflection</h2>
        <p>Spotify is already a successful, easy-to-use app and serves its purpose for 
            streaming music. However, I identified a lack of interaction among users. The collaborative
            queue intends to make sharing music feel more natural and organic. I can imagine my friends 
            taking turns to queue songs and listening together, creating a unique experience with each session.
        </p>
        <p>I learned how to think like a product designer, user Figma, and prototype for the first time this
            past semester. While challenging and frustrating at times, ultimately, I've developed a passion for
            creating delightful products that engage the user in meaningful interations.
        </p>
        <p>Read my Medium article on this case study here.</p>
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

export default Spotify;
