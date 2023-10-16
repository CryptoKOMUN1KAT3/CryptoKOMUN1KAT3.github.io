document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const toggleSoundButton = document.getElementById("toggle-sound-button");
  const welcomePage = document.getElementById("welcome-page");
  const mainContent = document.getElementById("main-content");
  const getSomeDiv = document.createElement("div");

  const ptsdAudio = new Audio('./audio/ptsd-vid.mp3');
  const staticAudio = new Audio('./audio/static.wav');

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
    ptsdAudio.play();
  });

  noButton.addEventListener("click", function () {
    staticAudio.play();

    welcomePage.style.display = "none";
    getSomeDiv.style.position = "fixed";
    getSomeDiv.style.backgroundImage = "url(./images/white-noise-colourful.gif)";
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
    getSomeDiv.innerText = "TRY THIS";
    document.body.appendChild(getSomeDiv);

    setTimeout(() => {
      staticAudio.pause();
      staticAudio.currentTime = 0;
      window.location.href = "https://www.dextools.io/app/en/ether/pool-explorer";
    }, 800);
  });

  toggleSoundButton.addEventListener('click', () => {
    if (ptsdAudio.paused) {
      ptsdAudio.play();
      toggleSoundButton.textContent = 'Sound Off';
    } else {
      ptsdAudio.pause();
      toggleSoundButton.textContent = 'Sound On';
    }
  });
});
