function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the color of the text
function changeTextColor() {
  var textElement = document.getElementById("navText");
  var colorChangeCount = 0; // Counter to keep track of color changes

  setInterval(function () {
    if (colorChangeCount % 12 === 0) {
      // Every 12th color change
      textElement.style.color = "#FFFFFF"; // Set text color to white
    } else {
      textElement.style.color = getRandomColor(); // Set text to a random color
    }
    colorChangeCount++; // Increment the counter
  }, 600); // Change color every 1.5 seconds
}

// Call the function when the script loads
changeTextColor();
