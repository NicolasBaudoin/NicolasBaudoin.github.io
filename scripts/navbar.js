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

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
