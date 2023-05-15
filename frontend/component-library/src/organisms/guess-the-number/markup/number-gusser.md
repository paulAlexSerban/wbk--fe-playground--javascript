---
title: "Number Guesser"
type: "widget"
assets: { main-js: "NumberGuesser.widget.js" }
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />

  <div class="container" data-js-widget="NumberGuesser">
    <div id="game">
      <p>Guess a number between <span class="min-num"></span> and <span class="max-num"></span></p>
      <input type="number" id="guess-input" placeholder="Enter your guess...">
      <input type="submit" value="Submit" id="guess-btn">
      <p class="message"></p>
    </div>
  </div>