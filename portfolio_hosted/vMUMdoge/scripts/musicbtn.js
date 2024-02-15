window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.getElementById("siteMusic");
  const button = document.getElementById("toggleMusic");
  // Assuming the music should autoplay with sound
  audio.muted = false; // Ensure audio is not muted
  let isPlaying = true; // Assume music is playing
  button.textContent = "Mute"; // Initially set button to "Mute"

  // Function to toggle music and button text
  function toggleMusic() {
    if (audio.paused || audio.ended) {
      audio
        .play()
        .then(() => {
          button.textContent = "Mute";
          isPlaying = true;
        })
        .catch((error) => {
          console.error("Play was prevented.", error);
        });
    } else {
      audio.pause();
      button.textContent = "Play";
      isPlaying = false;
    }
  }

  // Attempt to play music on load
  audio.play().catch((error) => {
    console.log(
      "Autoplay with sound was prevented. User interaction required."
    );
    // Since autoplay with sound was prevented, adjust accordingly
    isPlaying = false;
    button.textContent = "Play"; // Indicate that music is not playing
  });

  button.addEventListener("click", toggleMusic);
});
