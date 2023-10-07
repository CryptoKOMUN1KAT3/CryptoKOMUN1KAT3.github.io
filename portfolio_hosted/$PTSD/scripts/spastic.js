document.addEventListener("DOMContentLoaded", () => {
  const glitchyImageElements = document.querySelectorAll(".glitchy-image");

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const glitchImage = (img) => {
    const randomX = getRandomInt(-window.innerWidth, window.innerWidth);
    const randomY = getRandomInt(-window.innerHeight, window.innerHeight);
    const rotation = getRandomInt(0, 360);
    const scaleX = Math.random() * 2; // Keep the scaling if desired
    const scaleY = Math.random() * 2; // Keep the scaling if desired
    img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${rotation}deg) scale(${scaleX}, ${scaleY})`;
  };

  glitchyImageElements.forEach((img) => {
    setInterval(() => glitchImage(img), 50);
  });
});
