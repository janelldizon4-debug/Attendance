const text = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
const display = document.getElementById("welcomeMsg");
const menu = document.getElementById("menuBtns");

let i = 0;
let started = false;

function startAll() {
  if (started) return;
  started = true;

  // clear in case may laman na
  display.innerHTML = "";

  // VOICE
  const voice = new SpeechSynthesisUtterance(text);
  voice.lang = "en-US";
  voice.rate = 1;
  voice.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(voice);

  // TYPING
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

// mobile + desktop unlock
document.addEventListener("click", startAll, { once: true });
document.addEventListener("touchstart", startAll, { once: true });
