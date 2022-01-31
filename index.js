"use strict";

const input = document.querySelector(".url-ip");
const btn = document.querySelector(".url-btn");

const list = document.querySelector(".urls");

// Demo URLS
const urlArr = ["https://money.usnews.com/investing/funds/articles/top-hedge-funds-this-year", "https://www.im.natixis.com/us-offshore/research/institutional-investor-survey-2021-outlook", "https://home.kpmg/xx/en/home/insights/2021/04/ten-things-institutional-investors-need-to-know-about-investing-in-infrastructure.html"];

list.innerHTML = "";

const insertURL = (url) => {
  if (url) {
    const ipURL = url;
    const listItem = `<p class="url">${ipURL}</p>`;

    list.insertAdjacentHTML("afterbegin", listItem);

    input.value = "";
  }

  input.focus(); // makes the input field focused
};

urlArr.forEach((ele) => insertURL(ele));

btn.addEventListener("click", () => {
  insertURL(input.value);
});

window.addEventListener("keydown", (event) => {
  event.key === "Enter" ? insertURL(input.value) : "";
});

