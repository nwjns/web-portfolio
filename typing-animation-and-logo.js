document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo-pic");
  const sections = ["about", "projects", "contacts", "home"];
  let currentSectionIndex = 0;

  logo.addEventListener("click", function () {
    const currentSection = sections[currentSectionIndex];
    document
      .getElementById(currentSection)
      .scrollIntoView({ behavior: "smooth" });
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  });
});
