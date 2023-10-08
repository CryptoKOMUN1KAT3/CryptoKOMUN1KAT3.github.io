// document.addEventListener("DOMContentLoaded", () => {
//   const textElements = document.querySelectorAll(
//     "#Tokenomics h1, #Tokenomics li"
//   );

//   const colors = ["white", "red", "black"];

//   const getRandomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1)) + min;

//   const applyRandomEffects = () => {
//     textElements.forEach((text) => {
//       const randomX = getRandomInt(-50, 50);
//       const randomY = getRandomInt(-5, 5);
//       const scale = getRandomInt(90, 110) / 100;
//       const blur = getRandomInt(0, 5);
//       const colorIndex = getRandomInt(0, colors.length - 1);
//       const color = colors[colorIndex];

//       text.style.transform = `translate(${randomX}px, ${randomY}px) scale(${scale})`;
//       text.style.color = color;

//       text.style.textShadow = `
//                 ${randomX * -1}px ${randomY * -1}px ${blur}px ${color}, 
//                 ${randomX}px ${randomY}px ${blur}px ${color}
//             `;

//       if (text.tagName === "H1") {
//         text.style.transform = `translateX(${randomX * 5}px)`;
//       }
//     });
//   };

//   setInterval(applyRandomEffects, 50);
// });


document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll(
    "#Tokenomics h1, #Tokenomics li"
  );

  const colors = ["white", "red", "black"];

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const applyRandomEffects = () => {
    textElements.forEach((text) => {
      const randomX = getRandomInt(-5, 5);
      const randomY = getRandomInt(-2, 2);
      const scale = getRandomInt(98, 102) / 100;
      const blur = getRandomInt(0, 2);
      const colorIndex = getRandomInt(0, colors.length - 1);
      const color = colors[colorIndex];

      text.style.transform = `translate(${randomX}px, ${randomY}px) scale(${scale})`;
      text.style.color = color;

      text.style.textShadow = `
                ${randomX * -1}px ${randomY * -1}px ${blur}px ${color}, 
                ${randomX}px ${randomY}px ${blur}px ${color}
            `;

      if (text.tagName === "H1") {
        text.style.transform = `translateX(${randomX}px)`;
      }
    });
  };

  setInterval(applyRandomEffects, 100); 
});
