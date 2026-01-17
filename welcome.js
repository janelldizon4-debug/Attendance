document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = "Hi! I'm your assistant for today to guide you through the (CLUB NAME) dashboard. Please choose your activity below.";
  const displayEl = document.getElementById("welcomeMsg");
  const menuBtns = document.getElementById("menuBtns");

  if (!displayEl || !menuBtns) {
    console.error("Missing #welcomeMsg or #menuBtns");
    return;
  }

  menuBtns.style.display = "flex"; 
  menuBtns.style.opacity = 0;       

  let charIndex = 0;

  function typeWriter() {
    if (charIndex < welcomeText.length) {
      displayEl.innerHTML += welcomeText.charAt(charIndex);
      charIndex++;

      
      let delay = 25;
      const char = welcomeText.charAt(charIndex - 1);
      if (char === "," || char === ".") delay = 150;

      setTimeout(typeWriter, delay);
    } else {
      
      menuBtns.style.transition = "opacity 0.8s ease";
      menuBtns.style.opacity = 1;
    }
  }

  displayEl.innerHTML = "";
  typeWriter();
});
