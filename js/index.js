const toggle = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const menu = document.querySelector(".nav-menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".open-menu")) {
    menu.classList.remove(activeClass);
  }
close.addEventListener("click", function () {
  menu.classList.remove(activeClass);
})
});