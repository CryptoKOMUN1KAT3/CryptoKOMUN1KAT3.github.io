document.addEventListener("DOMContentLoaded", function () {
  const endTime = new Date("April 17, 2024 22:03:24").getTime();
  const timerElement = document.getElementById("timer");

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = endTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Calculate milliseconds as the remainder of seconds divided, scaled to display as a 3-digit number

    timerElement.innerHTML =
      "BTC Halving In: " +
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s ";

    if (distance < 0) {
      clearInterval(timerInterval);
      timerElement.innerHTML = "The halving has occurred!";
    }
  };

  // Update the countdown every 100 milliseconds to include milliseconds in the display
  const timerInterval = setInterval(updateCountdown, 100);
});
