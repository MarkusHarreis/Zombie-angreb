console.log("loaded..");

document.querySelector("#Japan").addEventListener("click", JapanF);

function JapanF() {
  console.log("loaded japan");
  document.querySelector(".cls-jap").classList.add("my_scale");
  document.querySelector(".cls-japi").classList.add("my_scale");
  document.querySelector(".cls-jap").style.fill = "#d07474ff";
}

document.querySelector("#død").addEventListener("click", dødF);

function dødF() {
  console.log("loaded død");
  document.querySelector(".cls-død").classList.add("my_scale");
  document.querySelector(".cls-dødi").classList.add("my_scale");
  document.querySelector(".cls-død").style.fill = "#d07474ff";
}

document.querySelector("#mygg").addEventListener("click", mygF);

function mygF() {
  console.log("loaded myg");
  document.querySelector(".cls-myg").classList.add("my_scale");
  document.querySelector(".cls-mygi").classList.add("my_scale");
  document.querySelector(".cls-myg").style.fill = "#d07474ff";
}

document.querySelector("#corona").addEventListener("click", coronaF);

function coronaF() {
  console.log("loaded død");
  document.querySelector(".cls-rona").classList.add("my_scale");
  document.querySelector(".cls-ronai").classList.add("my_scale");
  document.querySelector(".cls-rona").style.fill = "#d07474ff";
}
