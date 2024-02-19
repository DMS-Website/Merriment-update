document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  
    // Wait for the Swiper to be fully initialized before sliding to a specific index
    swiper.on("init", function () {
      swiper.slideTo(1, 0, false);
    });
  });
  
  
  