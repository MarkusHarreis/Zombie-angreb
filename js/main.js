const html = document.querySelector("html");

const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);

document.querySelector(".slide-btn").addEventListener("click", function () {
  this.setAttribute(
    "aria-pressed",
    this.getAttribute("aria-pressed") !== "true"
  );
});
