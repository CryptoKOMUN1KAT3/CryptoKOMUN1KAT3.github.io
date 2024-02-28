document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const handleVisibilityChange = () => {
    sections.forEach((section) => {
      if (section.id !== "splash") {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        section.classList.toggle("visible", isVisible);
      }
    });
  };

  window.addEventListener("scroll", handleVisibilityChange);
  handleVisibilityChange(); // Run once on load in case sections are initially in view
});
