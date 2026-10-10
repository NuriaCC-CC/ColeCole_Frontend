// Mostrar u ocultar la contraseña
const togglePasswordButton = document.querySelector("#toggle-password");
const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye-icon");

if (togglePasswordButton && passwordInput && eyeIcon) {
  togglePasswordButton.addEventListener("click", function () {
    const passwordIsHidden = passwordInput.getAttribute("type") === "password";

    if (passwordIsHidden) {
      passwordInput.setAttribute("type", "text");
      eyeIcon.setAttribute("src", "assets/icons/icon_eye_open.png");
      eyeIcon.setAttribute("alt", "Ocultar contraseña");
      togglePasswordButton.setAttribute("aria-label", "Ocultar contraseña");
    } else {
      passwordInput.setAttribute("type", "password");
      eyeIcon.setAttribute("src", "assets/icons/icon_eye.png");
      eyeIcon.setAttribute("alt", "Mostrar contraseña");
      togglePasswordButton.setAttribute("aria-label", "Mostrar contraseña");
    }
  });
}

// Validación básica del formulario
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const loginError = document.querySelector("#login-error");

if (loginForm && emailInput && passwordInput && loginError) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const emailIsEmpty = email === "";
    const passwordIsEmpty = password === "";

    if (emailIsEmpty) {
      emailInput.classList.add("has-error");
      emailInput.setAttribute("aria-invalid", "true");
    } else {
      emailInput.classList.remove("has-error");
      emailInput.setAttribute("aria-invalid", "false");
    }

    if (passwordIsEmpty) {
      passwordInput.classList.add("has-error");
      passwordInput.setAttribute("aria-invalid", "true");
    } else {
      passwordInput.classList.remove("has-error");
      passwordInput.setAttribute("aria-invalid", "false");
    }

    if (emailIsEmpty || passwordIsEmpty) {
      loginError.innerText = "Por favor, completa todos los campos obligatorios.";
      loginError.hidden = false;
      return;
    }

    loginError.hidden = true;
    window.location.href = "school_selection.html";
  });
}

if (emailInput && passwordInput && loginError) {
  const loginInputs = [emailInput, passwordInput];

  loginInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.classList.remove("has-error");
        input.setAttribute("aria-invalid", "false");
      }

      if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginError.hidden = true;
      }
    });
  });
}

// Botón de Google sin acción en este prototipo
const googleButton = document.querySelector("#btn-google");

if (googleButton) {
  googleButton.addEventListener("click", function (event) {
    event.preventDefault();
  });
}
