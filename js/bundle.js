var link = document.querySelector(".modal-subscription-link");
var popup = document.querySelector(".modal-subscription");
var close = popup.querySelector(".close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});