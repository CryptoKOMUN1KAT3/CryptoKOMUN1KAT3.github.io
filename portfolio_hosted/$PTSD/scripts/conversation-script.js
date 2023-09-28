document.addEventListener("DOMContentLoaded", function () {
  const promptSection = document.getElementById("prompt-section");
  const talkToTherapistButton = document.getElementById(
    "talk-to-therapist-button"
  );

  talkToTherapistButton.addEventListener("click", function () {
    promptSection.innerHTML = `
            <div id="image-container">
                <img src="./therapist.jpg" alt="Therapist Image" class="fade-in">
            </div>
            <div id="text-container"></div>
        `;

    const textContainer = document.getElementById("text-container");
    const initialTexts = [
      "Hello handsome Anon. Welcome to your appointment.",
      "You've come to me with severe crypto PTSD, is that correct?",
    ];

    let textIndex = 0;
    let characterIndex = 0;

    const typewriterEffect = (texts, callback) => {
      if (characterIndex < texts[textIndex].length) {
        textContainer.textContent += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(() => typewriterEffect(texts, callback), 50);
      } else if (textIndex < texts.length - 1) {
        characterIndex = 0;
        textIndex++;
        textContainer.innerHTML += "<br>";
        typewriterEffect(texts, callback);
      } else if (callback) {
        callback();
      }
    };

    typewriterEffect(initialTexts, () => {
      textContainer.innerHTML +=
        '<br><button id="yes" class="convo">Y-yes hot l-l-lady...</button>';
      document.getElementById("yes").addEventListener("click", function () {
        textContainer.textContent = "";

        const nextTexts = [
          "Oh, that's ok sweet-cheeks.",
          "Seems like getting rekt af has mentally scarred you.",
          "Let's get you sorted with some therapy!",
          "Have you heard of the $PTSD project?",
        ];

        textIndex = 0;
        characterIndex = 0;
        typewriterEffect(nextTexts, () => {
          textContainer.innerHTML +=
            '<br><button id="no" class="convo">No...</button>';
          document.getElementById("no").addEventListener("click", function () {
            const finalTexts = [
              "It's a perfect token for someone like you.",
              "Made by a dev who understands your struggle.",
              "You can finally get unfucked with some proper gains.",
              "How does that sound?",
            ];

            textContainer.textContent = "";
            textIndex = 0;
            characterIndex = 0;
            typewriterEffect(finalTexts, () => {
              textContainer.innerHTML +=
                '<br><button id="fix-me" class="convo">Yes please doc, fix me up with some $PTSD!</button>';
              document
                .getElementById("fix-me")
                .addEventListener("click", function () {
                  const conclusionTexts = [
                    "Ok, my little patient. Copy the token CA and ape, these gains will fix your $PTSD.",
                    "For group therapy, join the support group for chads like you on Telegram!",
                    "You can meet other traumatized souls, our dev and you can even talk to me - just use the /ai command!",
                    "Our appointment time is over, now quickly, go ape you some $PTSD!",
                  ];

                  textIndex = 0;
                  characterIndex = 0;
                  textContainer.textContent = "";
                  typewriterEffect(conclusionTexts, () => {
                    textContainer.innerHTML += `<br><button id="copy-ca"  class="convo" class="side">Copy CA</button>
                                                                <button id="group-therapy" class="convo" class="side">Group Therapy</button>`;

                    document
                      .getElementById("copy-ca")
                      .addEventListener("click", function () {
                        const textarea = document.createElement("textarea");
                        textarea.value = "Coming Soon";
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textarea);
                        alert("Contract Address Copied: " + textarea.value);
                      });

                    document
                      .getElementById("group-therapy")
                      .addEventListener("click", function () {
                        window.open("https://t.me/OxPTSD", "_blank");
                      });

                    // Change the therapist image after 10 seconds
                    setTimeout(() => {
                      const imageContainer =
                        document.getElementById("image-container");
                      const image = imageContainer.querySelector("img");
                      image.classList.remove("fade-in");
                      image.classList.add("fade-out");

                      setTimeout(() => {
                        image.src = "./images/$PTSD.gif";
                        image.classList.remove("fade-out");
                        image.classList.add("fade-in");
                      }, 1000); // Adjust the time as per the fade-out animation duration
                    }, 5000); // 10 seconds delay to change the image
                  });
                });
            });
          });
        });
      });
    });
  });
  setTimeout(() => {
    const bounceButton = () => {
      const button = document.getElementById("talk-to-therapist-button");
      button.classList.add("bounce");

      setTimeout(() => {
        button.classList.remove("bounce");
      }, 1000); // The bounce animation duration
    };

    bounceButton();
    setInterval(bounceButton, 4000); // Repeat every 4 seconds
  }, 2000); // Initial delay of 2 seconds
});
