import { animate } from "./helpers.js";
const modal = () => {
  let screenWidth = screen.width;
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  window.addEventListener("resize", () => {
    screenWidth = screen.width;
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (screenWidth >= 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
          },
        });
      }
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";
    }
  });
};

export default modal;
