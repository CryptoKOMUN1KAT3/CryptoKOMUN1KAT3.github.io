document.addEventListener("DOMContentLoaded", function () {
  const memeImages = document.querySelectorAll(".meme-gallery img");

  function applyRandomGlitchToMeme(meme) {
    const randomDuration = Math.random() * 0.5 + 0.2 + "s";
    const randomDelay = Math.random() * 2 + "s";
    const randomPosition = Math.floor(Math.random() * 10) - 5 + "px";

    meme.style.animation = `memeGlitch ${randomDuration} infinite ${randomDelay}`;
    meme.style.transform = `translate(${randomPosition}, ${randomPosition})`;
  }

  memeImages.forEach(applyRandomGlitchToMeme);
});
