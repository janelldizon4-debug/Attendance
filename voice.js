// voice.js
const displayEl = document.getElementById("welcomeMsg");
const menuBtns = document.getElementById("menuBtns");

const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";

// Split text into words
const words = welcomeText.split(" ");
let wordIndex = 0;

const synth = window.speechSynthesis;

function typeWord() {
  if (wordIndex < words.length) {
    const word = words[wordIndex];
    displayEl.innerHTML += (wordIndex === 0 ? "" : " ") + word;
    
    // Speak this word
    let utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;
    synth.speak(utter);

    wordIndex++;
    // Delay based on word length
    setTimeout(typeWord, 250 + word.length * 20);
  } else {
    menuBtns.style.display = "flex";
  }
}

typeWord();
