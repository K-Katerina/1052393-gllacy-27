var form = document.querySelector(".subscription").querySelector("form");
var email = form.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  if (!email.value) {
    evt.preventDefault();
    if (!email.value) {
      email.classList.add("error-input");
      email.focus();
    }
  }
});

email.addEventListener("input", function (evt) {
  email.classList.remove("error-input");
});
