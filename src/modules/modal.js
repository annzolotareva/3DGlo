import { animate } from "./helpers";
const modal = () => {
  let screenWidth = screen.width;
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  animate({
    duration: 1000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
      modal.style.width = progress;
    },
  });

  window.addEventListener("resize", () => {
    screenWidth = screen.width;
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (screenWidth >= 768) {
        animate();
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
