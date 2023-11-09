document.addEventListener("DOMContentLoaded", (event) => {
  const loreItems = document.querySelectorAll(".lore-item");

  // Function to determine the direction of sliding
  const slideDirection = (index) => {
    return index % 2 === 0 ? "translateX(-100%)" : "translateX(100%)";
  };

  // Apply initial off-screen positions
  loreItems.forEach((item, index) => {
    item.style.transform = slideDirection(index);
    item.style.transition = "transform 0.5s ease-out";
    item.style.opacity = "0";
  });

  // Intersection Observer to watch when lore items come into view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // When entry is in view
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateX(0)";
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target); // Stop observing the current target
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the item is visible
    }
  );

  // Attach observer to each lore item
  loreItems.forEach((item) => {
    observer.observe(item);
  });
});
