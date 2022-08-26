let image = document.getElementById("third__section__img");
let images = {
  imgArray: [
    "../assets/images/third_section/third_section_image_1.webp",
    "../assets/images/third_section/third_section_image_2.webp",
  ],
};

let counter = 0;
function changeImg() {
  if (counter > 1) {
    counter = 0;
  }
  image.srcset = images.imgArray[counter];
  counter++;
  console.log(counter);
}
setInterval(changeImg, 10000);

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
  const locations = {
    southAfrica: { lat: -30.770403, lng: 23.787308 },
    johannesburg: { lat: -26.194705396783018, lng: 28.279971157902796 },
    durban: { lat: -29.761555, lng: 31.026951 },
    capeTown: { lat: -33.878537, lng: 18.700342 },
  };
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
  const markers = {
    marker: {
      icon: "../assets/images/icons/marker.svg",
    },
  };
  const options = {
    center: locations.southAfrica,
    zoom: 6,
    styles: style,
    disableDefaultUI: true,
  };

  const map = new google.maps.Map(selector, options);

  function marker(location) {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      icon: markers.marker.icon,
    });
    marker.addListener("click", () => {
      map.setZoom(10);
      map.setCenter(marker.getPosition());
    });
  }

  marker(locations.johannesburg);
  marker(locations.durban);
  marker(locations.capeTown);

  const firstLocation = document.getElementById("firstLocation");
  const secondLocation = document.getElementById("secondLocation");
  const thirdLocation = document.getElementById("thirdLocation");

  function changeCenter(location) {
    map.setZoom(20);
    map.setCenter(location);
    marker.setPosition(location);
  }

  firstLocation.addEventListener("click", (e) => {
    changeCenter(locations.johannesburg);
  });

  secondLocation.addEventListener("click", (e) => {
    changeCenter(locations.durban);
  });

  thirdLocation.addEventListener("click", (e) => {
    changeCenter(locations.capeTown);
  });
}

initMap();
