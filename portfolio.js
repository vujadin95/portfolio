const menuIcon = document.querySelector(".menu-icon-wrapper");
const links = document.querySelector(".links-container");
const menuIconType = document.querySelector(".menu-icon");
let isToggled = false;

menuIcon.addEventListener("click", function () {
  links.classList.toggle("active");
  toggleMenuIcon();
});

function toggleMenuIcon() {
  isToggled
    ? (menuIconType.src = "./images/svg/ham-menu.svg")
    : (menuIconType.src = "./images/svg/ham-menu-close.svg");
  isToggled = !isToggled;
}

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", function () {
    links.classList.remove("active");
    menuIconType.src = "./images/svg/ham-menu.svg";
  })
);
