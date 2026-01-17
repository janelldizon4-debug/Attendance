document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  const display = document.getElementById("welcomeMsg");
  const menu = document.getElementById("menuBtns");

  let i = 0;

  function speakAndType() {
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);

    display.innerHTML = "";
    i = 0;

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

  // Always require tap (browser rule)
  function initVoice() {
    speakAndType();
    document.removeEventListener("click", initVoice);
    document.removeEventListener("touchstart", initVoice);
  }

  document.addEventListener("click", initVoice);
  document.addEventListener("touchstart", initVoice);
});
