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

