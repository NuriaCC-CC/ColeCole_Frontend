const retryButton = document.querySelector("[data-retry]");

if (retryButton) {
  retryButton.addEventListener("click", function () {
    window.location.reload();
  });
}
