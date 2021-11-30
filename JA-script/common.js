$(window).ready(function () {
  $("#header").load("../include/headline.html");
  $("#roomSwiper").load("../include/room1.html");
  $("#footer").load("../include/footer.html");
});

// ---------------------------------------------
$(".swiper-nav")
  .children()
  .eq(0)
  .click(function () {
    $("#roomSwiper").load("../include/room1.html");
  });
$(".swiper-nav")
  .children()
  .eq(1)
  .click(function () {
    $("#roomSwiper").load("../include/room2.html");
  });
$(".swiper-nav")
  .children()
  .eq(2)
  .click(function () {
    $("#roomSwiper").load("../include/room3.html");
  });
$(".swiper-nav")
  .children()
  .eq(3)
  .click(function () {
    $("#roomSwiper").load("../include/room4.html");
  });
$(".swiper-nav")
  .children()
  .eq(4)
  .click(function () {
    $("#roomSwiper").load("../include/room5.html");
  });
