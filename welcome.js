document.addEventListener("DOMContentLoaded", () => {
  const displayEl = document.getElementById("welcomeMsg");
  const menuBtns = document.getElementById("menuBtns");

  const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  
  let charIndex = 0;
  const typingSpeed = 30;
  const pauseChars = { ",": 150, ".": 250 };

  function typeWriter() {
    if (charIndex < welcomeText.length) {
      const char = welcomeText.charAt(charIndex);
      displayEl.innerHTML += char;
      charIndex++;
      const delay = pauseChars[char] || typingSpeed;
      setTimeout(typeWriter, delay);
    } else {
      // Show buttons after typing finishes
      menuBtns.style.display = "flex"; // make sure this ID exists in your HTML
    }
  }

  displayEl.innerHTML = ""; // clear before typing
  typeWriter();
});
