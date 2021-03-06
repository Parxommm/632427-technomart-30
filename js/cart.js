const cartPopup = document.querySelector(".modal--cart");
const cartClose = cartPopup.querySelector(".modal__btn-close");

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

// .btn--buy

const buyButtons = document.querySelectorAll(".btn--buy");

for (var i = 0; i < buyButtons.length; i++) {
  const buyButton = buyButtons[i];
  buyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}
