var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let navbar = document.getElementById("navbar");
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    navbar.style.zIndex = "1";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
