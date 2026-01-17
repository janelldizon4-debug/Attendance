// welcome.js
document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = "Hi! I'm your assistant for today to guide you through the Velocity Society Club dashboard. Please choose your activity below.";
  const displayEl = document.getElementById("welcomeMsg");
  const menuBtns = document.getElementById("menuBtns");
  const contactMsg = document.getElementById("contactMsg");
  const socialBtns = document.getElementById("socialBtns");

  let charIndex = 0;
  const typingSpeed = 30; // base typing speed
  const pauseChars = { ",": 150, ".": 250 }; // extra pause for punctuation

  function typeWriter() {
    if (charIndex < welcomeText.length) {
      const char = welcomeText.charAt(charIndex);
      displayEl.innerHTML += char;
      charIndex++;

      const delay = pauseChars[char] || typingSpeed;
      setTimeout(typeWriter, delay);
    } else {
      // After typing finishes, show buttons and social/contact info
      menuBtns.style.display = "flex";
      contactMsg.style.display = "block";
      socialBtns.style.display = "flex";
    }
  }

  // Clear previous content and start typing
  displayEl.innerHTML = "";
  typeWriter();
});
