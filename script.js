document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const range = document.querySelector(".slider__range-js");

  if (!slider || !range) return;

  range.addEventListener("input", () => {
    slider.style.setProperty("--value", range.value + "%");
  });
});

