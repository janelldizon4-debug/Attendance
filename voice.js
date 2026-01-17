document.addEventListener("DOMContentLoaded", () => {

  const text = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  const display = document.getElementById("welcomeMsg");
  const menu = document.getElementById("menuBtns");

  let i = 0;
  let started = false;

  function speakAndType() {
    if (started) return;
    started = true;

    display.innerHTML = "";

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);

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

  // REQUIRED USER GESTURE
  document.body.addEventListener("click", speakAndType, { once: true });
  document.body.addEventListener("touchstart", speakAndType, { once: true });

});
