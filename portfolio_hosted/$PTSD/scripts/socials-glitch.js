document.addEventListener("DOMContentLoaded", () => {
  function glitchText() {
    const elements = document.querySelectorAll("#socials-addiction, #find-us");
    elements.forEach((element) => {
      const maxOffset = 20;
      const randomX = Math.floor(Math.random() * maxOffset) - maxOffset / 2;
      const randomY = Math.floor(Math.random() * maxOffset) - maxOffset / 2;
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      const textShadow = `${randomX}px ${randomY}px 0px rgba(${red},${green},${blue},0.7)`;

      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
      element.style.textShadow = textShadow;

      const glitchTime = Math.floor(Math.random() * 1000) + 100;

      setTimeout(() => {
        element.style.transform = "";
        element.style.textShadow = "";
      }, glitchTime);
    });
  }

  function setRandomInterval() {
    const randomTime = Math.floor(Math.random() * (10000 - 3000)) + 3000;
    glitchText();
    setTimeout(setRandomInterval, randomTime);
  }

  setRandomInterval();
});
