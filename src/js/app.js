import * as functions from "./modules/functions.js";

functions.isWebp();

const menuIcon = document.querySelector(".menu-header__icon");
menuIcon.onclick = () => {
  const menuBody = document.querySelector(".menu-header__body");

  menuIcon.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  document.body.classList.toggle("_lock");
};

document.addEventListener("DOMContentLoaded", functions.resize);
window.addEventListener("resize", functions.resize);
