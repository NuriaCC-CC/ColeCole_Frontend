const chatForm = document.querySelector("[data-chat-form]");
const messageInput = document.querySelector("#message-input");
const newMessage = document.querySelector("[data-new-message]");
const newMessageText = document.querySelector("[data-new-message-text]");

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (messageInput.value === "") {
    return;
  }

  newMessageText.innerText = messageInput.value;
  newMessage.classList.remove("is-hidden");
  messageInput.value = "";
});
