document.addEventListener("DOMContentLoaded", function () {
  const disclaimerButton = document.getElementById("disclaim-me");
  const disclaimerText = document.getElementById("disclaimer-text");

  const text =
    'Disclaimer: $PTSD is NOT a medical project or a shrink\'s perscription. It\'s literally a digital token that represents no real world value, no use, you can\'t hold it, give it to the bank, can\'t even stick it up your <b><span style="color: red;">ass</span></b> for some pleasure. It\'s worth as much, or as little as <b><span style="color: red;">retarded degens</span></b> (like you) will pay for it. So remember, you are gambling real world money for, we dont even know what. We give you a dopamine kick and and hopefully some money, but <b><span style="color: red;">REMEMBER YOU ARE DOING IT ALL AT YOUR OWN RISK! NFA. DYOR.</span></b>';

  disclaimerButton.addEventListener("click", function () {
    disclaimerButton.style.transition = "opacity 0.5s ease-in-out";
    disclaimerButton.style.opacity = 0;
    setTimeout(() => {
      disclaimerButton.style.display = "none";
    }, 500);

    disclaimerText.innerHTML = "";
    const words = text.split(" ");
    let index = 0;

    function typeWriter() {
      if (index < words.length) {
        const randomChar = Math.random()
          .toString(36)
          .substr(2, Math.floor(Math.random() * 5 + 1));
        disclaimerText.innerHTML =
          words.slice(0, index + 1).join(" ") + " " + randomChar;

        index++;
        setTimeout(typeWriter, 40);
      } else {
        disclaimerText.innerHTML = words.join(" ");
      }
    }

    typeWriter();
  });
});
