// voice.js
const displayEl = document.getElementById("welcomeMsg");
const menuBtns = document.getElementById("menuBtns");

// The welcome message
const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";

// Use SpeechSynthesis
const synth = window.speechSynthesis;

// Split message into characters for typing effect
let charIndex = 0;

function typeAndSpeak() {
  if (charIndex < welcomeText.length) {
    const char = welcomeText.charAt(charIndex);
    displayEl.innerHTML += char;
    charIndex++;

    // Only speak when a word boundary (space or punctuation)
    if (char === " " || char === "." || char === "," || charIndex === welcomeText.length) {
      const utter = new SpeechSynthesisUtterance(displayEl.innerText);
      utter.lang = "en-US";
      utter.rate = 1;
      utter.pitch = 1;
      synth.speak(utter);
    }

    // Small delay for smooth typing
    let delay = 30;
    if (char === "," || char === ".") delay = 200;
    setTimeout(typeAndSpeak, delay);
  } else {
    // Show menu buttons after typing finished
    menuBtns.style.display = "flex";
  }
}

typeAndSpeak();
