
const displayEl = document.getElementById("welcomeMsg");
const menuEl = document.getElementById("menuBtns");

const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";


const words = welcomeText.split(" ");
let wordIndex = 0;
let currentLine = "";

function typeWordWithVoice() {
  if (wordIndex < words.length) {
    const word = words[wordIndex];
    currentLine += (currentLine === "" ? "" : " ") + word;
    displayEl.innerHTML = currentLine;

    
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 1; // normal speed
    speechSynthesis.speak(utterance);

    wordIndex++;
   
    const delay = Math.max(50, word.length * 40); 
    setTimeout(typeWordWithVoice, delay);
  } else {
    if (menuEl) menuEl.style.display = "flex";
  }
}

typeWordWithVoice();
