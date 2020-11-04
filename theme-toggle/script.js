const sunMoonContainer = document.querySelector(".sun-moon-container");

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  /* Every time the button is clicked, we'll add or remove the dark class from our document */
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
