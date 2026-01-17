document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  const displayEl = document.getElementById("welcomeMsg");
  const menuBtns = document.getElementById("menuBtns");

  if (!displayEl || !menuBtns) {
    console.error("Missing #welcomeMsg or #menuBtns");
    return;
  }

  menuBtns.style.display = "flex"; // make it flex so layout works
  menuBtns.style.opacity = 0;       // start hidden

  let charIndex = 0;

  function typeWriter() {
    if (charIndex < welcomeText.length) {
      displayEl.innerHTML += welcomeText.charAt(charIndex);
      charIndex++;

      // small pause at punctuation
      let delay = 25;
      const char = welcomeText.charAt(charIndex - 1);
      if (char === "," || char === ".") delay = 150;

      setTimeout(typeWriter, delay);
    } else {
      // Fade in buttons smoothly
      menuBtns.style.transition = "opacity 0.8s ease";
      menuBtns.style.opacity = 1;
    }
  }

  displayEl.innerHTML = "";
  typeWriter();
});
