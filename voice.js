// voice.js
const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
const displayEl = document.getElementById("welcomeMsg");
const menuBtns = document.getElementById("menuBtns");

let charIndex = 0;

// Use SpeechSynthesis for voice
const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance(welcomeText);
utterance.lang = "en-US";
utterance.rate = 1; // speed
utterance.pitch = 1;

function typeWriter() {
  if (charIndex < welcomeText.length) {
    const char = welcomeText.charAt(charIndex);
    displayEl.innerHTML += char;
    charIndex++;

    // small delay per char
    let delay = 25;
    if (char === "," || char === ".") delay = 150;

    setTimeout(typeWriter, delay);
  } else {
    // show menu after typing
    menuBtns.style.display = "flex";
  }
}

// Start typing animation
typeWriter();

// Start voice immediately
synth.speak(utterance);
