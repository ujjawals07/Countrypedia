"use strict";

let html;
console.log("ready");
const countriesContainer = document.querySelector(".country_details");
const countrydata = function (data) {
  html = ` <div class="name style" >
    <h2 class="country_name name">Name</h2>
    <p class="answer">${data.name.common}</p>
  </div>
  <div class="capital style">
    <h2 class="country_capital id="map">capital</h2>
    <p class="answer" id="cap">${data.capital}</p>
  </div>

  <div class="population style">
    <h2 class="country_population">continent</h2>
    <p class="answer">${data.continents}</p>
  </div>
  <div class="currency style">
    <h2 class="country_currency">currency</h2>
    <p class="answer">${Object.keys(data.currencies)}</p>
  </div>
  <div class="language style">
    <h2 class="country_language">language</h2>
    <p class="answer">${Object.values(data.languages)}</p>
  </div>
  <div class="continent style">
    <h2 class="country_continent">flag</h2>
    <img class="answer img" src ="${data.flags.png}"</img>
  </div>
  <div class="area style">
    <h2 class="country_area">population</h2>
    <p class="answer">${data.population}</p>
  </div>
  <div class="name1 style">
    <h2 class="country_name">area</h2>
    <p class="answer">${data.area}</p>
  </div>`;

  removecountry();

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
  btnclose.style.opacity = 1;
};

const removecountry = function () {
  //countriesContainer.style.opacity = 1;
  while (countriesContainer.hasChildNodes()) {
    countriesContainer.removeChild(countriesContainer.firstChild);
  }
  countriesContainer.style.opacity = 0;
  btnclose.style.opacity = 0;
};

const country = async function (c) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${c}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    countrydata(data[0]);
  } catch (error) {
    alert(
      "either you enter the wrong country name  or something went wrong with our data💥💥"
    );
  }
};

let datasearch = document.querySelector("[data-search]");

const searchbtn = document.querySelector("#btn-search");

const showcountry_details = function () {
  let m = datasearch.value;
  country(m);
};

const datas = function () {
  searchbtn.addEventListener("click", function () {
    showcountry_details();
  });
};
datas();
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") showcountry_details();
});

const clear_search = document.querySelector(".search-from");
const btnclose = document.querySelector("#btn-close");
btnclose.addEventListener("click", function () {
  console.log("clicked");
  //countriesContainer.style.opacity = 0;
  removecountry();
  clear_search.value = "";
});
