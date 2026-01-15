const form = document.querySelector(".contact-form");
const message = document.querySelector(".form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();

  message.hidden = true;
  message.className = "form-message";

  if (!name) {
    showError("Введите имя");
    return;
  }

  if (!email || !email.includes("@")) {
    showError("Введите корректный email");
    return;
  }

  showSuccess(`Спасибо, ${name}! Форма отправлена.`);
  form.reset();
});

function showError(text) {
  message.textContent = text;
  message.classList.add("error");
  message.hidden = false;
}

function showSuccess(text) {
  message.textContent = text;
  message.classList.add("success");
  message.hidden = false;
}
