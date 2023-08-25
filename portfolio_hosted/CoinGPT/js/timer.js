// Function to calculate remaining time
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

// Function to start the timer and keep it updated
function initializeTimer(id, endtime) {
  const timer = document.getElementById(id);
  function updateTimer() {
    const t = getTimeRemaining(endtime);

    // Update the timer text
    timer.textContent = `${t.days} days, ${t.hours} hours, ${t.minutes} minutes, ${t.seconds} seconds`;

    // If the timer is over, stop updating
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  // Update the timer for the first time immediately and then every second
  updateTimer();
  const timeinterval = setInterval(updateTimer, 1000);
}

// Set the date we're counting down to
const deadline = new Date(Date.parse("June 9, 2023 20:00:00"));

// Start the timer
initializeTimer("timer", deadline);
