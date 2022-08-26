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

function initMap() {
  const selector = document.getElementById("map");
  const southAfrica = { lat: -30.770403, lng: 23.787308 };
  const style = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#909194",
        },
        {
          weight: 1,
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.attraction",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.government",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.medical",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.place_of_worship",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.school",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "poi.sports_complex",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#97afb5",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#e6d6d0",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e4eaeb",
        },
      ],
    },
  ];
  const icons = {
    marker: {
      icon: "../assets/images/marker.svg",
    },
  };
  const options = {
    center: southAfrica,
    zoom: 5,
    styles: style,
    disableDefaultUI: true,
  };

  const map = new google.maps.Map(selector, options);

  function marker(lat, lng) {
    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      icon: icons.marker.icon,
    });
  }
  marker(-26.194705396783018, 28.279971157902796);
  marker(-29.761555, 31.026951);
  marker(-33.878537, 18.700342);
}

initMap();
