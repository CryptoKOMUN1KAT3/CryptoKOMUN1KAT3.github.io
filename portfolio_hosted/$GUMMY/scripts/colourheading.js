document.addEventListener("DOMContentLoaded", () => {
  const gummyTextSpans = document.querySelectorAll("#gummyText span");

  // Function to generate random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to change the color of a span
  function changeColor(span) {
    span.style.color = getRandomColor();
  }

  // Animate the colors of each letter
  function animateLetters() {
    gummyTextSpans.forEach((span) => {
      setTimeout(() => {
        changeColor(span);
      }, Math.random() * 1000); // Randomize the timing for each letter
    });
  }

  // Change colors periodically
  setInterval(animateLetters, 2000);

  // Initial color animation
  animateLetters();
});
