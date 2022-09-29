var carrousel = document.querySelector(".carousel");
var seat = document.querySelector(".carousel-seat");

$(".toggle").on("click", function (e) {
  var newSeat;
  var elements = document.querySelector(".is-ref");
  var currSlideControl = $(e.currentTarget);
  // e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.

  elements.removeClass("is-ref");
  if (currSlideControl.data("toggle") === "next") {
    newSeat = next(elements);
    carrousel.removeClass("is-reversing");
  } else {
    newSeat = prev(elements);
    carrousel.addClass("is-reversing");
  }

  newSeat.addClass("is-ref").css("order", 1);
  for (var i = 2; i <= seat.length; i++) {
    newSeat = next(newSeat).css("order", i);
  }

  carrousel.removeClass("is-set");
  return setTimeout(function () {
    return carrousel.addClass("is-set");
  }, 50);

  function next(elements) {
    if (elements.next().length) {
      return elements.next();
    } else {
      return seat.first();
    }
  }

  function prev(elements) {
    if (elements.prev().length) {
      return elements.prev();
    } else {
      return seat.last();
    }
  }
});
