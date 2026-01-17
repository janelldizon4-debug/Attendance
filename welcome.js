document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  const displayEl = document.getElementById("welcomeMsg");
  const menuBtns = document.getElementById("menuBtns");
  const contactMsg = document.getElementById("contactMsg");
  const socialBtns = document.getElementById("socialBtns");

  let charIndex = 0;

  function typeWriter() {
    if (charIndex < welcomeText.length) {
      const char = welcomeText.charAt(charIndex);
      displayEl.innerHTML += char;
      charIndex++;
      let delay = 25;
      if (char === "," || char === ".") delay = 150;
      setTimeout(typeWriter, delay);
    } else {
      // Show the buttons and messages after typing finishes
      menuBtns.style.display = "flex";
      contactMsg.style.display = "block";
      socialBtns.style.display = "flex";
    }
  }

  // Initialize
  displayEl.innerHTML = "";
  typeWriter();
});
