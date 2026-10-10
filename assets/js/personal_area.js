const searchForms = document.querySelectorAll(".mobile-search, .desktop-search");
const favoriteButtons = document.querySelectorAll(".favorite-button");

searchForms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "index.html#catalog";
  });
});

favoriteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const isFavorite = button.getAttribute("aria-pressed") === "true";
    const icon = button.querySelector("img");
    const currentLabel = button.getAttribute("aria-label");

    button.classList.toggle("is-favorite");

    if (isFavorite) {
      button.setAttribute("aria-pressed", "false");

      if (icon) icon.setAttribute("src", "assets/icons/icon_heart.png");
    } else {
      button.setAttribute("aria-pressed", "true");

      if (icon) icon.setAttribute("src", "assets/icons/icon_heart_red.png");
    }

    if (currentLabel && isFavorite) {
      button.setAttribute(
        "aria-label",
        currentLabel.replace("Quitar", "Añadir").replace(" de favoritos", " a favoritos")
      );
    } else if (currentLabel) {
      button.setAttribute(
        "aria-label",
        currentLabel.replace("Añadir", "Quitar").replace(" a favoritos", " de favoritos")
      );
    }
  });
});
