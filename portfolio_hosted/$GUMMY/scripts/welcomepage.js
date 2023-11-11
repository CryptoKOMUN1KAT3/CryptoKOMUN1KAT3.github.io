document.addEventListener("DOMContentLoaded", (event) => {
  const enterButton = document.getElementById("enterButton");
  const wrapper = document.querySelector(".wrapper");
  const welcomeScreen = document.querySelector(".welcome-screen");

  enterButton.addEventListener("click", function () {
    welcomeScreen.style.display = "none"; // Hide the welcome screen
    wrapper.style.display = "block"; // Show the main content
  });
});
