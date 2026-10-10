const openButtons = document.querySelectorAll("[data-open-modal]");
const modals = document.querySelectorAll("[data-modal]");

let lastFocusedElement = null;

function openModal(modalId) {
  const modal = document.querySelector("#" + modalId);

  if (!modal) return;

  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector("[data-close-modal]");
  if (closeButton) closeButton.focus();
}

function closeModal(modal) {
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) lastFocusedElement.focus();
}

openButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    openModal(button.getAttribute("data-open-modal"));
  });
});

modals.forEach(function (modal) {
  const modalCloseButtons = modal.querySelectorAll("[data-close-modal]");

  modalCloseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      closeModal(modal);
    });
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;

  const openModalElement = document.querySelector("[data-modal]:not([hidden])");
  if (openModalElement) closeModal(openModalElement);
});
