document.addEventListener("DOMContentLoaded", () => {
  const elementsToGlitch = document.querySelectorAll(
    "#logo2, #crypto-ptsd-content p"
  );

  const apply3DGlitch = (element) => {
    const randomDepth = Math.random() * 50;
    element.style.textShadow = `
      ${randomDepth}px 0 red, 
      -${randomDepth}px 0 cyan, 
      ${randomDepth * 2}px 0 blue, 
      -${randomDepth * 2}px 0 green`;
  };

  const applyFuzzinessGlitch = (element) => {
    const randomBlur = Math.random() * 15;
    element.style.textShadow = `0 0 ${randomBlur}px rgba(0,0,0,0.7)`;
    element.style.filter = `grayscale(${Math.random()})`;
    element.style.color = "transparent";
  };

  const applyLinearGlitch = (element) => {
    const randomShiftY = Math.random() * 20 - 10;
    const randomShiftX = Math.random() * 500 - 250;
    element.style.position = "relative";
    element.style.transform = `translate(${randomShiftX}px, ${randomShiftY}px)`;
  };

  const removeGlitch = (element) => {
    element.style.textShadow = "";
    element.style.color = "";
    element.style.position = "";
    element.style.transform = "";
    element.style.filter = "";
  };

  const applyRandomGlitchEffect = () => {
    elementsToGlitch.forEach((element) => {
      const randomEffect = Math.floor(Math.random() * 4);

      removeGlitch(element);

      switch (randomEffect) {
        case 0:
          apply3DGlitch(element);
          break;
        case 1:
          applyFuzzinessGlitch(element);
          break;
        case 2:
          applyLinearGlitch(element);
          break;
      }
    });
  };

  setInterval(() => {
    applyRandomGlitchEffect();
    setTimeout(() => {
      elementsToGlitch.forEach((element) => removeGlitch(element));
    }, Math.random() * 300);
  }, Math.random() * 1000);
});
