// voice.js
const displayEl = document.getElementById("welcomeMsg");
const menuBtns = document.getElementById("menuBtns");

const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";

const synth = window.speechSynthesis;
const words = welcomeText.split(" "); // split text into words
let wordIndex = 0;
let typedText = "";

// Function to type and speak each word
function typeAndSpeakWord() {
  if (wordIndex < words.length) {
    const word = words[wordIndex];
    typedText += word + " ";
    displayEl.innerHTML = typedText;

    // Speak this word
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;
    synth.speak(utter);

    wordIndex++;
    // Adjust typing speed
    const delay = 200; // ms between words
    setTimeout(typeAndSpeakWord, delay);
  } else {
    // Show menu buttons after finished
    menuBtns.style.display = "flex";
  }
}

typeAndSpeakWord();
