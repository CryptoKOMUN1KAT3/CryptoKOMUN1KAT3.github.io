// document.addEventListener("DOMContentLoaded", (event) => {
//   const gummySong = document.getElementById("gummySong");
//   const bannerButton = document.getElementById("startButton");
//   const musicToggleButton = document.getElementById("music");
//   const text = document.getElementById("gummyText");
//   const slidesContainer = document.getElementById("slidesContainer");

//   const slides = [
//     {
//       imgSrc: "./images/1.jpg",
//       text: "In the whimsical realm of Candytopia, five clans of Gummy Bears flourished, each distinct in hue and virtue. The Red Gummy Bears, bold and valiant, thrived in the Cherry Grove, while the Green Gummy Bears, embodiments of wisdom, dwelt in the verdant Leafy Forest.",
//     },
//     {
//       imgSrc: "./images/2.jpg",
//       text: "Illuminated by the sun's rays, the Yellow Gummy Bears radiated cheer throughout the Lemon Meadows. In contrast, the White Gummy Bears, symbols of tranquility, settled in the serene Coconut Mountains. The Orange Gummy Bears, bursting with creativity, brought innovation to life in the Mango Valley.",
//     },
//     {
//       imgSrc: "./images/3.jpg",
//       text: "These clans, while maintaining trade, cherished their solitude, fostering a sense of superiority over centuries. This led to rivalries, as each clan revered their own lifestyle above the others, igniting disputes over land and beliefs in the once harmonious Candytopia.",
//     },
//     {
//       imgSrc: "./images/4.jpg",
//       text: "Turmoil ensued until a sagacious White Gummy Bear elder, Benjamin, received a prophetic vision of darkness descending upon Candytopia. He realized unity was imperative and convened a summit of the clans in the neutral Coconut Mountains.",
//     },
//     {
//       imgSrc: "./images/5.jpg",
//       text: "With great resolve, Benjamin implored the clan leaders to transcend their conflicts for Candytopia's survival. He envisioned a coalition where the bravery, wisdom, joy, and ingenuity of each clan would fortify their defense against the impending threat.",
//     },
//     {
//       imgSrc: "./images/6.jpg",
//       text: "His plea struck a chord, and the leaders contemplated a grand alliance. The courage of the Reds, the Green's sagacity, the Yellow's joy, and the Orange's inventiveness were to become pillars of their newfound bond.",
//     },
//     {
//       imgSrc: "./images/7.jpg",
//       text: "From the seeds of cooperation blossomed a unified front, symbolized by a tapestry of Gummy Bears, each stripe representing the solemn vows of a clan. Their combined might ushered in an era of unprecedented prosperity and strength.",
//     },
//     {
//       imgSrc: "./images/8.jpg",
//       text: "As they stood united against the shadows, Candytopia entered a golden age, a beacon of hope to all confectionery creatures. The Gummy Bears' alliance proved that embracing diversity was the essence of their strength!",
//     },
//     {
//       imgSrc: "./images/9.jpg",
//       text: "Become a part of the $GUMMY story! Click BUY $GUMMY! on the top of the website to learn how!",
//     },
//   ];

//   let currentSlide = 0;

//   bannerButton.addEventListener("click", function () {
//     gummySong.play();
//     musicToggleButton.style.display = "block";
//     text.style.display = "none";
//     bannerButton.style.display = "none";
//     slidesContainer.style.display = "block";
//     changeSlide();
//   });

//   musicToggleButton.addEventListener("click", function () {
//     if (gummySong.paused) {
//       gummySong.play();
//       musicToggleButton.textContent = "Sound Off";
//     } else {
//       gummySong.pause();
//       musicToggleButton.textContent = "Sound On";
//     }
//   });

//   function changeSlide() {
//     if (currentSlide >= slides.length) {
//       gummySong.pause();
//       return;
//     }

//     const slide = slides[currentSlide];
//     slidesContainer.innerHTML = `
//         <div class="slide">
//           <img src="${slide.imgSrc}" alt="Slide Image">
//           <div class="slide-text">
//             <p>${slide.text}</p>
//           </div>
//         </div>
//       `;

//     // Fade in the new slide
//     const slideElement = slidesContainer.querySelector(".slide");
//     setTimeout(() => {
//       slideElement.style.opacity = 1;
//     }, 0);

//     // Check if it's the last slide
//     if (currentSlide === slides.length - 1) {
//       // Do not fade out the last slide
//       return;
//     }

//     // Prepare for next slide
//     setTimeout(() => {
//       // Fade out the current slide
//       slideElement.style.opacity = 0;

//       // Change to the next slide after the fade effect
//       setTimeout(() => {
//         currentSlide++;
//         changeSlide();
//       }, 2000); // This should match the CSS transition time
//     }, 4000); // Time each slide is visible before fading out
//   }
// });

document.addEventListener("DOMContentLoaded", (event) => {
  const gummySong = document.getElementById("gummySong");
  const bannerButton = document.getElementById("startButton");
  const musicToggleButton = document.getElementById("music");
  const text = document.getElementById("gummyText");
  const slidesContainer = document.getElementById("slidesContainer");

  const slides = [
    {
      imgSrc: "./images/1.jpg",
      text: "In the whimsical realm of Candytopia, five clans of Gummy Bears flourished, each distinct in hue and virtue. The Red Gummy Bears, bold and valiant, thrived in the Cherry Grove, while the Green Gummy Bears, embodiments of wisdom, dwelt in the verdant Leafy Forest.",
    },
    {
      imgSrc: "./images/2.jpg",
      text: "Illuminated by the sun's rays, the Yellow Gummy Bears radiated cheer throughout the Lemon Meadows. In contrast, the White Gummy Bears, symbols of tranquility, settled in the serene Coconut Mountains. The Orange Gummy Bears, bursting with creativity, brought innovation to life in the Mango Valley.",
    },
    {
      imgSrc: "./images/3.jpg",
      text: "These clans, while maintaining trade, cherished their solitude, fostering a sense of superiority over centuries. This led to rivalries, as each clan revered their own lifestyle above the others, igniting disputes over land and beliefs in the once harmonious Candytopia.",
    },
    {
      imgSrc: "./images/4.jpg",
      text: "Turmoil ensued until a sagacious White Gummy Bear elder, Benjamin, received a prophetic vision of darkness descending upon Candytopia. He realized unity was imperative and convened a summit of the clans in the neutral Coconut Mountains.",
    },
    {
      imgSrc: "./images/5.jpg",
      text: "With great resolve, Benjamin implored the clan leaders to transcend their conflicts for Candytopia's survival. He envisioned a coalition where the bravery, wisdom, joy, and ingenuity of each clan would fortify their defense against the impending threat.",
    },
    {
      imgSrc: "./images/6.jpg",
      text: "His plea struck a chord, and the leaders contemplated a grand alliance. The courage of the Reds, the Green's sagacity, the Yellow's joy, and the Orange's inventiveness were to become pillars of their newfound bond.",
    },
    {
      imgSrc: "./images/7.jpg",
      text: "From the seeds of cooperation blossomed a unified front, symbolized by a tapestry of Gummy Bears, each stripe representing the solemn vows of a clan. Their combined might ushered in an era of unprecedented prosperity and strength.",
    },
    {
      imgSrc: "./images/8.jpg",
      text: "As they stood united against the shadows, Candytopia entered a golden age, a beacon of hope to all confectionery creatures. The Gummy Bears' alliance proved that embracing diversity was the essence of their strength!",
    },
    {
      imgSrc: "./images/9.jpg",
      text: "Become a part of the $GUMMY story! Click BUY $GUMMY! on the top of the website to learn how!",
    },
  ];

  let currentSlide = 0;

  bannerButton.addEventListener("click", function () {
    gummySong.play();
    musicToggleButton.style.display = "block";
    text.style.display = "none";
    bannerButton.style.display = "none";
    slidesContainer.style.display = "block";
    changeSlide();
  });

  musicToggleButton.addEventListener("click", function () {
    if (gummySong.paused) {
      gummySong.play();
      musicToggleButton.textContent = "Sound Off";
    } else {
      gummySong.pause();
      musicToggleButton.textContent = "Sound On";
    }
  });

  function changeSlide() {
    if (currentSlide >= slides.length) {
      gummySong.pause();
      return;
    }

    const slide = slides[currentSlide];
    const isSmallViewport = window.matchMedia("(max-width: 909px)").matches;

    // Create slide content based on viewport size
    let slideContent = `<div class="slide-text"><p>${slide.text}</p></div>`;

    if (!isSmallViewport) {
      // Include image in slide for larger viewports
      slideContent =
        `<img src="${slide.imgSrc}" alt="Slide Image">` + slideContent;
    }

    slidesContainer.innerHTML = `<div class="slide">${slideContent}</div>`;

    // Fade in the new slide
    const slideElement = slidesContainer.querySelector(".slide");
    setTimeout(() => {
      slideElement.style.opacity = 1;
    }, 0);

    // Check if it's the last slide
    if (currentSlide === slides.length - 1) {
      // Do not fade out the last slide
      return;
    }

    // Prepare for next slide
    setTimeout(() => {
      // Fade out the current slide
      slideElement.style.opacity = 0;

      // Change to the next slide after the fade effect
      setTimeout(() => {
        currentSlide++;
        changeSlide();
      }, 2000); // This should match the CSS transition time
    }, 8000); // Time each slide is visible before fading out
  }

  // Start with the first slide
  changeSlide();
});
