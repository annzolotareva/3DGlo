const menu = () => {
  const menu = document.querySelector("menu");
  const container = document.querySelector(".container");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };
  container.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.closest(".menu")) {
      handleMenu();
    }
  });
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("close-btn") || e.target.closest("ul>li>a")) {
      handleMenu();
    }
  });
};

export default menu;
