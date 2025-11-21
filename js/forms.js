const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const andreOutput = document.querySelector("#andre_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();

  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const Email = formData.get("email");
  const Andre = formData.get("andre");
  const Accept = formData.get("accept_terms");

  const symptomer = formData.getAll("symptom");

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = Email;
  andreOutput.textContent = Andre;
  termsOutput.textContent = Accept;

  document.querySelector("#hvilke_output").textContent = symptomer.join(", ");

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);

form.addEventListener("submit", handleSubmit);
