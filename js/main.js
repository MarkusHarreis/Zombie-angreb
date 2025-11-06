const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);

form.addEventListener("submit", handleSubmit);
