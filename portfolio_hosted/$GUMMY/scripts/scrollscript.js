function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    // Calculate the top position of the element relative to the viewport
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;

    // Check if the element has any initial translateX transformation
    // Adjust these class names based on your actual setup
    let translateXAdjustment = 0;
    if (element.classList.contains("translate-left")) {
      translateXAdjustment = element.offsetWidth; // Assuming initial translateX is -100%
    } else if (element.classList.contains("translate-right")) {
      translateXAdjustment = -element.offsetWidth; // Assuming initial translateX is 100%
    }

    // Scroll to the element's position, adjusted for any initial translation
    window.scrollTo({
      top: elementTop + translateXAdjustment,
      behavior: "smooth",
    });
  }
}
