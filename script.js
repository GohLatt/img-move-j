const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    remove();
    panel.classList.add("action");
  });
});
const remove = () => {
  panels.forEach((panel) => {
    panel.classList.remove("action");
  });
};
