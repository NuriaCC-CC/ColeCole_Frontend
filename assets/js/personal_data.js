const backButton = document.querySelector(".back-button");
const searchForms = document.querySelectorAll(".mobile-search, .desktop-search");
const personalDataForm = document.querySelector("#personal-data-form");
const cancelButton = document.querySelector("#cancel-button");
const successMessage = document.querySelector("#success-message");

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

if (cancelButton) {
  cancelButton.addEventListener("click", function () {
    window.location.href = "personal_area.html";
  });
}

if (personalDataForm && successMessage) {
  personalDataForm.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.classList.add("is-visible");

    setTimeout(function () {
      window.location.href = "personal_area.html";
    }, 1600);
  });
}
