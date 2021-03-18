// Slider
const slider = document.querySelector(".categories__item-slider");

if (slider) {
  const next = document.querySelector(".slide__next");
  const prev = document.querySelector(".slide__prev");
  const dots = document.querySelectorAll(".slider__dot");
  const slides = document.querySelectorAll(".slide");

  let index = 0;

  const currentSlide = n => {
    for(slide of slides) {
      slide.classList.remove("slide--current");
    }
    slides[n].classList.add("slide--current");
  }

  const currentDot = n => {
    for(dot of dots) {
      dot.classList.remove("slider__dot--current");
    }
    dots[n].classList.add("slider__dot--current");
  }

  const prepareCurrentSlide = ind => {
    currentSlide(ind);
    currentDot(ind);
  }

  const nextSlide = () => {
    if(index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  }

  const prevSlide = () => {
    if(index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  }

  dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
    })
  })

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
}
// end slider

// modal--map
const mapPopup = document.querySelector(".modal--map");

if (mapPopup) {
  const mapOpen = document.querySelector(".company__contacts-link");
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
}
// end modal--map

// modal--write-to-us
const formPopup = document.querySelector(".modal--form");

if (formPopup) {
  const formOpen = document.querySelector(".btn--write-to-us");
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
      ormEmail.focus();
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
}
// end modal--write-to-us

// service
const tabsLinksContainer = document.querySelector(".service__list");
const tabsContentContainer = document.querySelector(".service__description");

if (tabsLinksContainer && tabsContentContainer) {
  const tabsLink = document.querySelectorAll(".service__item-link");
  const description = document.querySelectorAll(".service__description-item");

  tabsLink.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();
      let tabActive = item;
      let tabId = tabActive.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!tabActive.classList.contains("service__item-link--active")) {
        tabsLink.forEach(function(item) {
        item.classList.remove("service__item-link--active");
        });

        description.forEach(function(item) {
        item.classList.remove("service__description-item--current");
        });

        tabActive.classList.add("service__item-link--active");
        currentTab.classList.add("service__description-item--current");
      };
    });
  });
}
// end service

// modal--cart
const cartPopup = document.querySelector(".modal--cart");

if (cartPopup) {
  const cartClose = cartPopup.querySelector(".modal__btn-close");
  const continueShopping = cartPopup.querySelector(".btn--continue-shopping");

  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  continueShopping.addEventListener("click", function (evt) {
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
}
// end modal--cart
