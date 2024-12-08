"use strict";
const header = document.querySelector(".header");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", function () {
  console.log("clicked");
  header.classList.add("open-nav");
});

menuClose.addEventListener("click", function () {
  console.log("clicked");
  header.classList.remove("open-nav");
});
