var countdownDate = new Date("June 23, 2023 16:00:00 UTC").getTime();

var timer = setInterval(function() {
  var now = new Date().getTime();
  var timeLeft = countdownDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "TEENY is now listed on PancakeSwap!";
  }
}, 1000);