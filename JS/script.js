document.addEventListener("DOMContentLoaded", () => {
  const joyButton = document.getElementById("joy-button");
  const flowers = document.querySelectorAll(".Flower");
  const sun = document.querySelector(".Sun");
  const joyContainer = document.querySelector(
    ".joy-section .emotion-container"
  );
  const calmeButton = document.getElementById("calme-button");
  const plane = document.querySelector(".Plane");
  const calmText = document.querySelector(".calm-text");
  const tristesseButton = document.getElementById("tristesse-button");
  const rainContainer = document.querySelector(".rain-container");

  joyButton.addEventListener("click", () => {
    flowers.forEach((flower) => {
      flower.style.display = "flex";
    });
    sun.style.display = "block";
    joyContainer.classList.add("active");
    joyButton.style.display = "none";
  });

  calmeButton.addEventListener("click", () => {
    plane.style.display = "block";
    calmText.style.display = "block";
    setTimeout(() => {
      calmText.style.opacity = "1";
      calmText.style.transition = "opacity 2s ease-in-out";
    }, 100);
    calmeButton.style.display = "none";
  });

  tristesseButton.addEventListener("click", () => {
    rainContainer.style.display = "block";
    tristesseButton.style.display = "none";
  });
});

