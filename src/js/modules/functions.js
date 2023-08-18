export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
}

export function resize(e) {
  if (document.body.offsetWidth > 500) return;

  const headerBtn = document.querySelector(".header__btn");
  console.log(headerBtn.dataset.move);

  document.querySelector("." + headerBtn.dataset.move).append(headerBtn);
}

export function burgerMenu() {
  const menuIcon = document.querySelector(".menu-header__icon");
  const menuBody = document.querySelector(".menu-header__body");

  menuIcon.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  document.body.classList.toggle("_lock");
}
