const passwordButtons = document.querySelectorAll('.password-toggle');

passwordButtons.forEach(function (button) {
  const inputId = button.getAttribute('data-target');
  const input = document.querySelector('#' + inputId);
  const icon = button.querySelector('img');

  if (input) {
    button.addEventListener('click', function () {
      const passwordIsHidden = input.type === 'password';

      if (passwordIsHidden) {
        input.setAttribute('type', 'text');
        button.setAttribute('aria-pressed', 'true');
        button.setAttribute('aria-label', 'Ocultar contraseña');

        if (icon) icon.setAttribute('src', 'assets/icons/icon_eye_open.png');
      } else {
        input.setAttribute('type', 'password');
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-label', 'Mostrar contraseña');

        if (icon) icon.setAttribute('src', 'assets/icons/icon_eye.png');
      }
    });
  }
});

const pendingLinks = document.querySelectorAll('.pending-link');

pendingLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
  });
});

const signingForm = document.querySelector('#signing-form');

if (signingForm) {
  signingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'school_selection.html';
  });
}
