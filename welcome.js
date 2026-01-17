document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  const displayEl = document.getElementById("welcomeMsg");
  const menuBtns = document.getElementById("menuBtns");

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
      // Show menu buttons after typing finishes
      if (menuBtns) menuBtns.style.display = "flex"; // make sure this ID exists in HTML
    }
  }

  displayEl.innerHTML = "";
  typeWriter();
});
