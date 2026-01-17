const text = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
const display = document.getElementById("welcomeMsg");
const menu = document.getElementById("menuBtns");

let i = 0;
let started = false;

function startVoiceAndTyping() {
  if (started) return;
  started = true;

  // Voice
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 1;
  utter.pitch = 1;
  speechSynthesis.speak(utter);

  // Typing
  function type() {
    if (i < text.length) {
      display.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 30);
    } else {
      menu.style.display = "flex";
    }
  }

  type();
}

// Required user interaction (browser policy)
document.addEventListener("click", startVoiceAndTyping, { once: true });
document.addEventListener("touchstart", startVoiceAndTyping, { once: true });
