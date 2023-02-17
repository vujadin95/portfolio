const menuElement = document.querySelector(".header-menu-icon-wrapper");
const ulElement = document.querySelector(".info-container");
const imgElement = document.querySelector(".header-menu-icon");
let isClicked = false;

function changeMenuImage() {
  isClicked = !isClicked;
  if (isClicked) {
    imgElement.src = "./images/svg/ham-menu-close.svg";
  } else {
    imgElement.src = "./images/svg/ham-menu.svg";
  }
}

ulElement.addEventListener("click", function (e) {
  // isClicked = !isClicked;
  changeMenuImage();

  ulElement.classList.remove("info-container-column");
  ulElement.classList.add("info-container");
});

menuElement.addEventListener("click", function () {
  changeMenuImage();
  console.log("klikuo si");
  ulElement.classList.remove("info-container");
  if (ulElement.classList.contains("info-container-column")) {
    ulElement.classList.remove("info-container-column");
    ulElement.classList.add("info-container");
  } else {
    ulElement.classList.add("info-container-column");
  }
  // ulElement.classList.add("full-width");
});
