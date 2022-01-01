const modal = () => {
  const screenWidth = screen.width;

  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  let count = 0;
  let idInterval;

  const appearanceModal = () => {
    count++;
    idInterval = requestAnimationFrame(appearanceModal);
    if (modal.style.opacity < 1) {
      modal.style.opacity = count * 0.04;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  const resetValues = () => {
    count = 0;
    modal.style.opacity = 0;
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (screenWidth >= 768) {
        appearanceModal();
      }
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    if (screenWidth >= 768) {
      cancelAnimationFrame(idInterval);
      resetValues();
    }
    modal.style.display = "none";
  });
};

export default modal;
