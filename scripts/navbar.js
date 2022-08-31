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
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let navbarOut = document.getElementsByClassName("links");
let closeBtn = document.getElementById("close-btn-js");

// open mobile menu
navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  closeBtn.classList.toggle("active-btn");
  navBarToggle.style.visibility = "hidden";
});

//close mobile menu when click
closeBtn.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  closeBtn.classList.toggle("active-btn");
  navBarToggle.style.visibility = "visible";
});
