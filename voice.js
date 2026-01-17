const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
const displayEl = document.getElementById("welcomeMsg");

let wordIndex = 0;
const words = welcomeText.split(" ");
displayEl.innerHTML = "";

const synth = window.speechSynthesis;
const utter = new SpeechSynthesisUtterance(welcomeText);
utter.rate = 1; // normal speed
utter.pitch = 1;

// speak at the same time as typing word by word
function typeAndSpeak() {
  if (wordIndex < words.length) {
    displayEl.innerHTML += (wordIndex === 0 ? "" : " ") + words[wordIndex];
    wordIndex++;
    setTimeout(typeAndSpeak, 250); // delay per word
  } else {
    document.getElementById("menuBtns").style.display = "flex";
  }
}

// check if browser allows speech synthesis
if (synth) {
  synth.speak(utter);
}

// start typing animation
typeAndSpeak();
