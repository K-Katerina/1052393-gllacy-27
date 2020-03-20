
var btn = document.querySelector(".user-log .navigation-button");
var form = document.querySelector(".user-login").querySelector("form");
var email = form.querySelector("[name=login]");
var password = form.querySelector("[name=password]");

var isStorageSupport = true;
var storageEmail = "";

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

btn.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  email.focus();
  if (isStorageSupport) {
    if (storageEmail) {
      email.value = storageEmail;
      console.log(email.value)
      password.focus();
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!password.value || !email.value) {
    evt.preventDefault();
    if (!password.value) {
      password.classList.add("error-input");
      password.focus();
    }
    if (!email.value) {
      email.classList.add("error-input");
      email.focus();
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

password.addEventListener("input", function (evt) {
  password.classList.remove("error-input");
});

email.addEventListener("input", function (evt) {
  email.classList.remove("error-input");
});
