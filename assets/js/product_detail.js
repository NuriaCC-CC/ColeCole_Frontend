const backButton = document.querySelector(".back-button");
const searchForms = document.querySelectorAll(".mobile-search, .desktop-search");
const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryDots = document.querySelectorAll(".carousel-dot");
const thumbnailButtons = document.querySelectorAll(".thumbnail-button");
const previousButton = document.querySelector(".carousel-arrow-left");
const nextButton = document.querySelector(".carousel-arrow-right");
const favoriteButton = document.querySelector(".favorite-button");

let currentSlide = 0;

function showSlide(slideNumber) {
  if (slideNumber < 0) {
    currentSlide = gallerySlides.length - 1;
  } else if (slideNumber >= gallerySlides.length) {
    currentSlide = 0;
  } else {
    currentSlide = slideNumber;
  }

  gallerySlides.forEach(function (slide, index) {
    if (index === currentSlide) {
      slide.classList.add("is-current");
    } else {
      slide.classList.remove("is-current");
    }
  });

  galleryDots.forEach(function (dot, index) {
    if (index === currentSlide) {
      dot.classList.add("is-current");
    } else {
      dot.classList.remove("is-current");
    }
  });

  thumbnailButtons.forEach(function (thumbnail, index) {
    if (index === currentSlide) {
      thumbnail.classList.add("is-current");
    } else {
      thumbnail.classList.remove("is-current");
    }
  });
}

if (backButton) {
  backButton.addEventListener("click", function () {
    history.back();
  });
}

searchForms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "index.html#catalog";
  });
});

if (previousButton) {
  previousButton.addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });
}

if (nextButton) {
  nextButton.addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });
}

thumbnailButtons.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    const selectedSlide = Number(thumbnail.getAttribute("data-slide"));
    showSlide(selectedSlide);
  });
});

if (favoriteButton) {
  favoriteButton.addEventListener("click", function () {
    const isFavorite = favoriteButton.getAttribute("aria-pressed") === "true";
    const favoriteIcon = favoriteButton.querySelector("img");

    favoriteButton.classList.toggle("is-favorite");

    if (isFavorite) {
      favoriteButton.setAttribute("aria-pressed", "false");
      favoriteButton.setAttribute("aria-label", "Añadir la sudadera a favoritos");

      if (favoriteIcon) {
        favoriteIcon.setAttribute("src", "assets/icons/icon_heart.png");
      }
    } else {
      favoriteButton.setAttribute("aria-pressed", "true");
      favoriteButton.setAttribute("aria-label", "Quitar la sudadera de favoritos");

      if (favoriteIcon) {
        favoriteIcon.setAttribute("src", "assets/icons/icon_heart_red.png");
      }
    }
  });
}

showSlide(0);
