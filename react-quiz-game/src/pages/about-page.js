import React from "react";
import thinkingGif from "../images/thinkingface.gif";
import "./about-page.css";

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <h2>Sarah Uhlarik</h2>
      <p>We're learning HTML together</p>
      <p>Some artists I've been listening to recently:</p>
      <ul className="emoji-list">
        <li>Odeza</li>
        <li>Labrinth</li>
        <li>Flora Cash</li>
      </ul>
      <p>Some languages I am writing:</p>
      <ul className="emoji-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <p>
        A TV show I've been watching recently is{" "}
        <a
          href="https://www.hbomax.com"
          title="A Sci-Fi Fantasy Show"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lovecraft Country
        </a>
        .
      </p>
      <div id="js-output"></div>
      <button id="click-button">Click Button</button>
      <button id="speak-button">Speak Button</button>
      <img src={thinkingGif} alt="Trivia Game Icon" width="100" />
    </main>
  );
}

export default AboutPage;
