const cartItems = document.querySelectorAll("[data-cart-item]");
const deleteButtons = document.querySelectorAll("[data-delete-item]");
const cartCount = document.querySelector("[data-cart-count]");
const cartLabel = document.querySelector("[data-cart-label]");
const summaryCount = document.querySelector("[data-summary-count]");
const summaryLabel = document.querySelector("[data-summary-label]");
const summarySubtotal = document.querySelector("[data-summary-subtotal]");
const summaryTotal = document.querySelector("[data-summary-total]");
const cartStatus = document.querySelector("[data-cart-status]");
const backButton = document.querySelector("[data-back]");
const searchForms = document.querySelectorAll("form[role='search']");

function formatPrice(price) {
  return price + ",00 €";
}

function updateCartSummary() {
  const visibleItems = document.querySelectorAll(
    "[data-cart-item]:not(.cart-item--removed)"
  );
  let total = 0;

  visibleItems.forEach(function (item) {
    total = total + Number(item.getAttribute("data-price"));
  });

  const numberOfItems = visibleItems.length;
  let itemLabel = "prendas";

  if (numberOfItems === 1) {
    itemLabel = "prenda";
  }

  const formattedTotal = formatPrice(total);

  cartCount.innerText = numberOfItems;
  cartLabel.innerText = itemLabel;
  summaryCount.innerText = numberOfItems;
  summaryLabel.innerText = itemLabel;
  summarySubtotal.innerText = formattedTotal;
  summaryTotal.innerText = formattedTotal;
}

deleteButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    cartItems[index].classList.add("cart-item--removed");
    updateCartSummary();
    cartStatus.innerText = "Prenda eliminada del carrito.";
  });
});

searchForms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

backButton.addEventListener("click", function () {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
});
