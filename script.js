
/* =========================================
   HIS ABIDING PRESENCE INTERNATIONAL GOSPEL CENTER
   Navigation and page utilities
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  // Mobile navigation menu
  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after a navigation link is selected
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
      });
    });

    // Close the menu when Escape is pressed
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
        menuToggle.focus();
      }
    });
  }

  // Automatically update the copyright year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
