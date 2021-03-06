// modal--map

const mapOpen = document.querySelector(".company__contacts-link");
const mapPopup = document.querySelector(".modal--map");
const mapClose = mapPopup.querySelector(".modal__btn-close");

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// modal--write-to-us

const formOpen = document.querySelector(".btn--write-to-us");
const formPopup = document.querySelector(".modal--form");
const formClose = formPopup.querySelector(".modal__btn-close");
const formForm = formPopup.querySelector(".modal__form");
const formName = formPopup.querySelector("#modal__form-name");
const formEmail = formPopup.querySelector("#modal__form-email");
const formText = formPopup.querySelector("#modal__form-text");

let isStorageSupport = true;
let storage1 = "";
let storage2 = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


formOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("modal-show");

  if (storageName) {
    formName.value = storageName;
    formEmail.focus();
  } else {
    formName.focus();
  }

  if (storageEmail) {
    formEmail.value = storageEmail;
    formText.focus();
  } else {
    formEmail.focus();
  }
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-show");
  formPopup.classList.remove("modal-error");
});

formPopup.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value || !formText.value) {
    evt.preventDefault();
    formPopup.classList.remove("modal-error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", formName.value);
      localStorage.setItem("email", formEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      formPopup.classList.remove("modal-show");
      formPopup.classList.remove("modal-error");
    }
  }
});

// modal--cart

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
