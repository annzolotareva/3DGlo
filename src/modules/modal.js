const modal = () => {
  let screenWidth = screen.width;
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  let count = 0;
  let idInterval;
  let isAnimatationCanceled;

  const appearanceModal = () => {
    count++;
    idInterval = requestAnimationFrame(appearanceModal);
    if (count * 0.05 <= 1) {
      modal.style.opacity = count * 0.05;
    } else {
      cancelAnimationFrame(idInterval);
      count = 0;
      isAnimatationCanceled = true;
    }
  };

  window.addEventListener("resize", () => {
    screenWidth = screen.width;
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (screenWidth >= 768) {
        isAnimatationCanceled = false;
        appearanceModal();
      } else {
        isAnimatationCanceled = true;
      }
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    if ((isAnimatationCanceled = false)) {
      cancelAnimationFrame(idInterval);
      count = 0;
      isAnimatationCanceled = true;
    }
    modal.style.display = "none";
  });
};

export default modal;
