document.addEventListener("DOMContentLoaded", (event) => {
  const link = document.querySelector("a.komun1kat3-link");

  function glowLink() {
    link.classList.add("glow");

    // Set a timeout to remove the glow effect after a few seconds
    setTimeout(() => {
      link.classList.remove("glow");
    }, 2000); // Glow duration
  }

  // Function to initiate the glowing effect intermittently
  function startIntermittentGlowing() {
    const minInterval = 5000; // Minimum interval of 5 seconds
    const maxInterval = 15000; // Maximum interval of 15 seconds
    const randomInterval =
      Math.random() * (maxInterval - minInterval) + minInterval;

    setTimeout(() => {
      glowLink();
      startIntermittentGlowing(); // Schedule the next glow
    }, randomInterval);
  }

  // Start the intermittent glowing effect
  startIntermittentGlowing();
});
