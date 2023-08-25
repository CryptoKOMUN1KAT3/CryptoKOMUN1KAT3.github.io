// Define roadmap points
const roadmapPoints = [
  "Token Launch on PancakeSwap - 04/09/2023, 15.00 ET",
  "Q3 2023 - Listings on Tier 3 and Tier 2 Exchanges",
  "Continuous, AI driven marketing",
  "Q4 - Listings on Major Exchanges, community development, industry partnerships",
];

// Get the element where the roadmap content will go
const roadmapContent = document.getElementById("roadmap-content");

// Initialize the index of the current roadmap point
let currentPointIndex = 0;

// Function to update the roadmap content
function updateRoadmap() {
  // Fade out
  roadmapContent.style.opacity = 0;

  // After a delay to allow the fade out to complete, change the text and fade back in
  setTimeout(() => {
    // Update the text of the roadmap content element
    roadmapContent.textContent = roadmapPoints[currentPointIndex];

    // Move to the next roadmap point, or loop back to the start if we're at the end
    currentPointIndex = (currentPointIndex + 1) % roadmapPoints.length;

    // Fade back in
    roadmapContent.style.opacity = 1;
  }, 500); // Same delay as the CSS transition duration
}

// Update the roadmap content for the first time immediately
updateRoadmap();

// Update the roadmap content every 5.5 seconds
setInterval(updateRoadmap, 5500);
