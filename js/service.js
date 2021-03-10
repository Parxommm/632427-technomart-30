// Servise

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
