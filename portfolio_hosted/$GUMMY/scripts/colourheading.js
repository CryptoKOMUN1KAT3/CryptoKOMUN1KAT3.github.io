document.addEventListener("DOMContentLoaded", () => {
  const gummyTextSpans = document.querySelectorAll("#gummyText span");

  // Define your specific colors
  const colors = [
    "#B22222", // Dirty Red
    "#556B2F", // Dirty Green
    "#F5F5F5", // Powdery White
    "#FFD700", // Powdery Yellow
    "#3CB371", // Sea Blue-Green
    "#FFA500", // Dirty Orange
  ];

  // Function to get a random color from the predefined list
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
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
