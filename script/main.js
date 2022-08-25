const hamburger = document.querySelector(".navbar__hamburger");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".navbar__links");

function triggerHamburger() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("mobile-navbar--active");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar")) {
      hamburger.classList.remove("active");
      navbar.classList.remove("mobile-navbar--active");
    }
  });
}

triggerHamburger();

function triggerCountry() {
  const triggerButton = document.querySelector(
    ".navbar__links--link__dropdown"
  );
  const dropdownMenu = document.querySelector(
    ".navbar__links--link__dropdown__menu"
  );
  const dropdownArrow = document.querySelector(".dropdownArrow");

  triggerButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
    dropdownArrow.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".navbar__links--link__dropdown") &&
      !e.target.closest(".navbar__links--link__dropdown__menu")
    ) {
      dropdownMenu.classList.remove("active");
      dropdownArrow.classList.remove("active");
    }
  });
}

triggerCountry();
