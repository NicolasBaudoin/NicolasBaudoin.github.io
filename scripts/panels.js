const btn0 = document.getElementById("tab-0");
const btn1 = document.getElementById("tab-1");
const btn2 = document.getElementById("tab-2");
const btn3 = document.getElementById("tab-3");
const btn4 = document.getElementById("tab-4");

function toggleItem(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      var current = this;
      for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove("selected-job");
        } else if (current.classList.contains("selected-job") === true) {
          current.classList.remove("selected-job");
        } else {
          current.classList.add("selected-job");
          openPanel();
        }
      }

      e.preventDefault();
    });
  }
}
toggleItem(document.querySelectorAll(".jobs-styledTabButton"));

const panel0 = document.getElementById("panel-0");
const panel1 = document.getElementById("panel-1");
const panel2 = document.getElementById("panel-2");

function openPanel() {
  if (btn0.classList.contains("selected-job")) {
    panel0.classList.add("active-panel");
    panel1.classList.remove("active-panel");
    panel2.classList.remove("active-panel");
  } else if (btn1.classList.contains("selected-job")) {
    panel1.classList.add("active-panel");
    panel0.classList.remove("active-panel");
    panel2.classList.remove("active-panel");
  } else if (btn2.classList.contains("selected-job")) {
    panel2.classList.add("active-panel");
    panel0.classList.remove("active-panel");
    panel1.classList.remove("active-panel");
  }
}
