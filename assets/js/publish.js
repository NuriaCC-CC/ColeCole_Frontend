const publishForm = document.querySelector("#publish-form");
const publicationModal = document.querySelector("#publication-modal");
const modalCloseButton = document.querySelector(".modal-close-button");
const backButton = document.querySelector(".back-button");
const searchForms = document.querySelectorAll(".mobile-search, .desktop-search");
const description = document.querySelector("#description");
const descriptionCounter = document.querySelector("#description-counter");

function openPublicationModal() {
  publicationModal.classList.add("is-open");
  publicationModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePublicationModal() {
  publicationModal.classList.remove("is-open");
  publicationModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

if (backButton) {
  backButton.addEventListener("click", function () {
    history.back();
  });
}

searchForms.forEach(function (searchForm) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "index.html#catalog";
  });
});

if (description && descriptionCounter) {
  description.addEventListener("input", function () {
    descriptionCounter.innerText = "(" + description.value.length + "/100)";
  });
}

publishForm.addEventListener("submit", function (event) {
  event.preventDefault();
  openPublicationModal();
});

modalCloseButton.addEventListener("click", function () {
  closePublicationModal();
});

publicationModal.addEventListener("click", function (event) {
  if (event.target === publicationModal) {
    closePublicationModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePublicationModal();
  }
});
