document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to Velocity Society Club. I am your virtual assistant for today. Please choose your activity to continue.";
  const display = document.getElementById("welcomeMsg");
  const menu = document.getElementById("menuBtns");

  let i = 0;
  display.innerHTML = "";
  display.style.opacity = 1;

  function typeWriter() {
    if (i < text.length) {
      display.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 35);
    } else {
      setTimeout(() => {
        menu.style.display = "flex";
        menu.style.opacity = 1;
      }, 400);
    }
  }

  typeWriter();
});
