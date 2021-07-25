const siteNav = document.querySelector(".site-nav");
const navToggle = siteNav.querySelector(".site-nav__toggle");

// Menu

siteNav.classList.remove("site-nav--nojs");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("site-nav--closed");
  siteNav.classList.toggle("site-nav--opened");
});
