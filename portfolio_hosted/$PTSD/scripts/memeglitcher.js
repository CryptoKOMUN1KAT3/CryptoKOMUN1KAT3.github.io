document.addEventListener("DOMContentLoaded", function () {
  const memes = document.querySelectorAll(".meme");

  const memeFilenames = Array.from({ length: 72 }, (_, i) => i + 136993539)
    .filter((n) => n !== 136993549 && n !== 136993584 && n !== 136993603)
    .map((n) => `./images/spastic/file_${n}.png`);

  function changeMemeImage(memeElement) {
    const randomIndex = Math.floor(Math.random() * memeFilenames.length);
    memeElement.src = memeFilenames[randomIndex];
    memeElement.classList.add("glitched");

    setTimeout(() => {
      memeElement.classList.remove("glitched");
    }, 200);
  }

  memes.forEach((meme) => {
    setInterval(() => {
      changeMemeImage(meme);
    }, Math.random() * 500 + 100);
  });
});
