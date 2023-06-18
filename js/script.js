// js
AOS.init({
  offset: 100,
  delay: 50,
  duration: 500,
  easing: "linear",
});
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
// jq
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  $(".daisy").daisyjs({
    dotColor: "#9F2B68",
    lineColor: "	#BF40BF",
  });
  var mixer = mixitup("#mixy", {
    animation: {
      duration: 300,
    },
  });
});
