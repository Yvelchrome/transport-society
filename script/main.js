function changeImage() {
  let imageContainer = document.getElementById("third__section__img");
  let images = {
    imgArray: [
      "../assets/images/third_section/third_section_image_1.webp",
      "../assets/images/third_section/third_section_image_2.webp",
    ],
  };

  let counter = 0;
  function switchImg() {
    if (counter > 1) {
      counter = 0;
    }
    imageContainer.srcset = images.imgArray[counter];
    counter++;
  }
  setInterval(switchImg, 10000);
}

changeImage();

function triggerHamburger() {
  const hamburger = document.querySelector(".navbar__hamburger");
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelector(".navbar__links");

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

triggerHamburger();
triggerCountry();
