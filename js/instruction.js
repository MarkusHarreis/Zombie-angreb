console.log("loaded..");

document.querySelector("#Japan").addEventListener("click", JapanF);

function JapanF() {
  console.log("loaded japan");
  document.querySelector(".cls-jap").classList.add("my_scale");
  document.querySelector(".cls-japi").classList.add("my_scale");
  document.querySelector(".cls-jap").style.fill = "#d07474ff";

  document.querySelector(".info-text h2").textContent = "Hjerne epidemier";
  document.querySelector(".info-text p").textContent =
    "Japansk hjernebetændelse";
  document.querySelector(".info-text #efficiency").textContent =
    "Noget om janpansk hjernebetændelse";
  document.querySelector(".info-text #requirement").textContent =
    "Noget mere om janpansk hjernebetændelse";

  document.querySelector(".cls-død").classList.remove("my_scale");
  document.querySelector(".cls-dødi").classList.remove("my_scale");
  document.querySelector(".cls-død").removeAttribute("style");

  document.querySelector(".cls-myg").classList.remove("my_scale");
  document.querySelector(".cls-mygi").classList.remove("my_scale");
  document.querySelector(".cls-myg").removeAttribute("style");

  document.querySelector(".cls-rona").classList.remove("my_scale");
  document.querySelector(".cls-ronai").classList.remove("my_scale");
  document.querySelector(".cls-rona").removeAttribute("style");
}

document.querySelector("#død").addEventListener("click", dødF);

function dødF() {
  console.log("loaded død");
  document.querySelector(".cls-død").classList.add("my_scale");
  document.querySelector(".cls-dødi").classList.add("my_scale");
  document.querySelector(".cls-død").style.fill = "#d07474ff";

  document.querySelector(".info-text h2").textContent = "Hjerne epidemier";
  document.querySelector(".info-text p").textContent = "Kuru";
  document.querySelector(".info-text #efficiency").textContent =
    "Noget om Kuru";
  document.querySelector(".info-text #requirement").textContent =
    "Noget mere om kuru";

  document.querySelector(".cls-myg").classList.remove("my_scale");
  document.querySelector(".cls-mygi").classList.remove("my_scale");
  document.querySelector(".cls-myg").removeAttribute("style");

  document.querySelector(".cls-rona").classList.remove("my_scale");
  document.querySelector(".cls-ronai").classList.remove("my_scale");
  document.querySelector(".cls-rona").removeAttribute("style");

  document.querySelector(".cls-jap").classList.remove("my_scale");
  document.querySelector(".cls-japi").classList.remove("my_scale");
  document.querySelector(".cls-jap").removeAttribute("style");
}

document.querySelector("#mygg").addEventListener("click", mygF);

function mygF() {
  console.log("loaded myg");
  document.querySelector(".cls-myg").classList.add("my_scale");
  document.querySelector(".cls-mygi").classList.add("my_scale");
  document.querySelector(".cls-myg").style.fill = "#d07474ff";

  document.querySelector(".info-text h2").textContent = "Hjerne epidemier";
  document.querySelector(".info-text p").textContent = "Zika-virus";
  document.querySelector(".info-text #efficiency").textContent =
    "Noget om Zika-virus";
  document.querySelector(".info-text #requirement").textContent =
    "Noget mere om Zika-virus";

  document.querySelector(".cls-død").classList.remove("my_scale");
  document.querySelector(".cls-dødi").classList.remove("my_scale");
  document.querySelector(".cls-død").removeAttribute("style");

  document.querySelector(".cls-rona").classList.remove("my_scale");
  document.querySelector(".cls-ronai").classList.remove("my_scale");
  document.querySelector(".cls-rona").removeAttribute("style");

  document.querySelector(".cls-jap").classList.remove("my_scale");
  document.querySelector(".cls-japi").classList.remove("my_scale");
  document.querySelector(".cls-jap").removeAttribute("style");
}

document.querySelector("#corona").addEventListener("click", coronaF);

function coronaF() {
  console.log("loaded død");
  document.querySelector(".cls-rona").classList.add("my_scale");
  document.querySelector(".cls-ronai").classList.add("my_scale");
  document.querySelector(".cls-rona").style.fill = "#d07474ff";

  document.querySelector(".info-text h2").textContent = "Hjerne epidemier";
  document.querySelector(".info-text p").textContent =
    "COVID-19 - Neurologiske symptomer";
  document.querySelector(".info-text #efficiency").textContent =
    "Noget om COVID-19 og neurologiske symptomer";
  document.querySelector(".info-text #requirement").textContent =
    "Noget mere om COVID-19 og neurologiske symptomer";

  document.querySelector(".cls-død").classList.remove("my_scale");
  document.querySelector(".cls-dødi").classList.remove("my_scale");
  document.querySelector(".cls-død").removeAttribute("style");

  document.querySelector(".cls-myg").classList.remove("my_scale");
  document.querySelector(".cls-mygi").classList.remove("my_scale");
  document.querySelector(".cls-myg").removeAttribute("style");

  document.querySelector(".cls-jap").classList.remove("my_scale");
  document.querySelector(".cls-japi").classList.remove("my_scale");
  document.querySelector(".cls-jap").removeAttribute("style");
}
