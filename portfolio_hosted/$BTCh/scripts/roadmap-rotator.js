document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll("#roadmap li");
  let activeIndex = 0;

  // Function to show an item
  function showItem(index) {
    items[index].style.display = "block";
    items[index].classList.add("fade");
  }

  // Function to hide an item
  function hideItem(index) {
    items[index].style.display = "none";
    items[index].classList.remove("fade");
  }

  // Initialize by showing the first item
  showItem(0);

  // Function to go to the next item
  function nextItem() {
    // Hide the current item
    hideItem(activeIndex);

    // Calculate the index of the next item
    activeIndex = (activeIndex + 1) % items.length;

    // Show the next item
    showItem(activeIndex);
  }

  // Change item every 5 seconds (includes fade time)
  setInterval(nextItem, 5000);
});
