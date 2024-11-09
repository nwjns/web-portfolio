document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
});
