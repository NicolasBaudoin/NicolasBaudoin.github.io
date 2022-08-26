// // hide navbar when scroll down and show when scroll up
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   let navbar = document.querySelector("header");

//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.style.top = "0";
//     navbar.style.position = "fixed";
//   } else {
//     navbar.style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
//   if (currentScrollPos == "0") {
//     navbar.style.boxShadow = "none";
//     navbar.style.transition = "0.7s";
//   }
// };
// console.log(window.pageXOffset);
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
