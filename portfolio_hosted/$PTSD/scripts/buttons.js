document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button"); // Added this line
  const welcomePage = document.getElementById("welcome-page");
  const mainContent = document.getElementById("main-content");
  const getSomeDiv = document.createElement("div"); // Added this line

  function glitchEffect() {
    yesButton.classList.add("glitch");
    setTimeout(() => {
      yesButton.classList.remove("glitch");
    }, Math.random() * 500 + 500);
  }

  setInterval(glitchEffect, Math.random() * 2000 + 2000);

  yesButton.addEventListener("click", function () {
    welcomePage.style.display = "none";
    mainContent.style.display = "block";
  });

  noButton.addEventListener("click", function () {
    welcomePage.style.display = "none";
    getSomeDiv.style.position = "fixed";
    getSomeDiv.style.backgroundImage =
      "url(./images/white-noise-colourful.gif)";
    getSomeDiv.style.backgroundSize = "cover";
    getSomeDiv.style.backgroundPosition = "center";
    getSomeDiv.style.top = "0";
    getSomeDiv.style.left = "0";
    getSomeDiv.style.width = "100vw";
    getSomeDiv.style.height = "100vh";
    getSomeDiv.style.backgroundColor = "black";
    getSomeDiv.style.color = "white";
    getSomeDiv.style.fontSize = "5em";
    getSomeDiv.style.textAlign = "center";
    getSomeDiv.style.paddingTop = "40vh";
    getSomeDiv.innerText = "THEN GET SOME";
    document.body.appendChild(getSomeDiv);

    setTimeout(() => {
      window.location.href =
        "https://www.dextools.io/app/en/ether/pool-explorer";
    }, 2000);
  });
});
