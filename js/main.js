$(".count").countUp({
    delay: 10,
    time: 1000,
  });
  $(document).ready(function () {
    $("#review .owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        544: {
          items: 1,
        },
      },
    });
  });
  