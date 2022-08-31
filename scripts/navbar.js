// ===== DESKTOP NAVBAR =====
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    navbar.classList.add("shadow");
  } else {
    navbar.style.top = "-100px";
  }
  if (currentScrollPos == "0") {
    navbar.classList.remove("shadow");
  }
  prevScrollpos = currentScrollPos;
};

// ===== MOBILE NAVBAR =====
var idsNavLink = document.querySelectorAll(
  "#about,#experience,#projects,#contact,#resume"
);

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let navbarOut = document.getElementsByClassName("links");
let closeBtn = document.getElementById("close-btn-js");
let logo = document.getElementById("logo");
let body = document.querySelector("body");
let html = document.querySelector("*");

console.log(idsNavLink);

// open mobile menu
navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  closeBtn.classList.toggle("active-btn");
  navBarToggle.style.visibility = "hidden";
  logo.classList.toggle("logo-hidden");
  html.style.overflow = "hidden";
});

//close mobile menu when click
closeBtn.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  closeBtn.classList.toggle("active-btn");
  navBarToggle.style.visibility = "visible";
  logo.classList.toggle("logo-hidden");
  html.style.overflow = "auto";
});

//actions on a of mobile nav
for (var i = 0; i < idsNavLink.length; i++) {
  idsNavLink[i].addEventListener("click", function () {
    mainNav.classList.toggle("active");
    closeBtn.classList.toggle("active-btn");
    navBarToggle.style.visibility = "visible";
    logo.classList.toggle("logo-hidden");
    html.style.overflow = "auto";
  });
}
