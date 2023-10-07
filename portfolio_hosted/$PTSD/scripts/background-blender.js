document.addEventListener("DOMContentLoaded", function () {
  const memesBg1 = document.getElementById("memesBg1");
  const memesBg2 = document.getElementById("memesBg2");

  function randomizeAnimation() {
    const randomDuration = Math.random() * 5 + 5;
    seconds;
    const randomDelay = Math.random() * 5;

    memesBg1.style.animationDuration = `${randomDuration}s`;
    memesBg1.style.animationDelay = `${randomDelay}s`;

    memesBg2.style.animationDuration = `${randomDuration}s`;
    memesBg2.style.animationDelay = `${randomDelay}s`;
  }

  randomizeAnimation();
  setInterval(randomizeAnimation, 5000);
});
