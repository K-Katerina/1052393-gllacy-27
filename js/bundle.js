var link = document.querySelector(".modal-subscription-link");
var popup = document.querySelector(".modal-subscription");
var close = popup.querySelector(".close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  if (isStorageSupport) {
    if (storageLogin) {
      login.value = storageLogin;
      email.focus();
    }
    if (storageEmail) {
      email.value = storageEmail;
      comment.focus();
    }
  }
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
