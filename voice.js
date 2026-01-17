document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  const display = document.getElementById("welcomeMsg");
  const menu = document.getElementById("menuBtns");

  let i = 0;
  let started = false;

  function startVoiceAndTyping() {
    if (started) return;
    started = true;

    display.innerHTML = "";
    menu.style.display = "none";

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);

    function typeWriter() {
      if (i < text.length) {
        display.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      } else {
        menu.style.display = "flex";
      }
    }

    typeWriter();
  }

  // Required user interaction (Android / Chrome rule)
  document.body.addEventListener("click", startVoiceAndTyping, { once: true });
  document.body.addEventListener("touchstart", startVoiceAndTyping, { once: true });
});
