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
      <div class="content article-content">
        <Article
            image="images/cc-thumbnail.png"
            title="Branding and designing for Cornell Creatives"
            time="Spring 2020"
            team="Sharon Li, Brand Lead"
            role="Product design, graphic design, marketing materials" 
            tools="Figma, Adobe Photoshop" />
      <h2>Mission</h2>
      <p>As design, music, writing, and coding fanatics, we came to Cornell to find other creators to
         collaborate with and be inspired by. Cornell Creatives provides an outlet for students to
          hone their skills and share their work with other creators. </p>
      <h2>My responsibilities</h2>
      <p>I work within Cornell Creatives' brand team as a graphic and UX designer for their website. 
       I focus on conveying Cornell Creatives' approachable and bubbly energy through illustrating
       colorful flat illustrations, using a friendly voice when writing, and designing a playfully
       interactive website.
      </p>
      <h2>Explorations for the Cornell Creatives logo</h2>
      <p>As part of their re-branding initiative from Uni Collective to Cornell Creatives in early 2020, 
        I helped create iterations for a brand new logo and style of graphic design.</p>
      <img class="img-example" src="images/cc-logos.png" alt="Explorations of Cornell Creatives logos."/>
      <p>We ultimately decided on the Layered logo option, because the use of the three colors visually represented the three main 
        focal points of the organization: community, platform, and agency for creators. Additionally, the letter "C" was the most apparent
        in this iteration, allowing for creators to take on their own take of what it means to be a part of Cornell Creatives.
      </p>
      <h2>Illustrations &amp; inspirations</h2>
      <p>"Alegria", meaning joy, is a style of illustration that features colorful, fluid, and almost abstract
        shapes and lines. Created by the creative agency Buck, this style primarily uses flattened perspectives
        and simplistic line details to carve out everyday objects. I was greatly inspired by these illustrations
        to create my own versions of vector illustrations in Figma for each Cornell Creatives medium.</p>
<img class="img-example" src="images/cc-illustrations.png" alt="Flat illustrations for each Cornell Creatives medium."/>
<p>These illustrations are often used on our social media posts, graphic posters, and are associated closely with
  the Cornell Creatives brand.
</p>
<h2>Social media marketing</h2>
<p> I've attached select posters that I have designed for Cornell Creatives initiatives and events.</p>
<h3>Summer 2020 Brand Recruitment Posters</h3>
<img class="img-example" src="images/cc-recruit.png" alt="Recruitment posters"/>
<h3>Featured Creators Substack Promotion</h3>
<img class="img-example" src="images/cc-featured.png" alt="Featured creators promotional material"/>

<p>The 2020 redesign of the Cornell Creatives website has not launched yet, so stay tuned for my case study on 
  my UX contributions. For now, visit the current <a href="cornellcreatives.com">Cornell Creatives site</a>.
</p>
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