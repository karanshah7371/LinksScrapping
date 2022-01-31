"use strict";

const input = document.querySelector(".url-ip");
const btn = document.querySelector(".url-btn");

const list = document.querySelector(".urls");

// Demo URLS
const urlArr = ["url-1", "url-2", "url-3"];

list.innerHTML = "";

const insertURL = (url) => {
  if (url) {
    const ipURL = url;
    const listItem = `<p>${ipURL}</p>`;

    list.insertAdjacentHTML("afterbegin", listItem);
    console.log(ipURL);
    input.value = "";
  } else console.log("no-url");

  input.focus(); // makes the input field focused
};

urlArr.forEach((ele) => insertURL(ele));

btn.addEventListener("click", () => {
  insertURL(input.value);
});

window.addEventListener("keydown", (event) => {
  event.key === "Enter" ? insertURL(input.value) : "";
});
