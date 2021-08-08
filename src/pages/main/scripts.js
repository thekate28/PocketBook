const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 5,
  loopedSlides: 1,
  spaceBetween: 20,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
  }
});

const swiper1 = new Swiper('.swiper-container-second', {
  direction: 'horizontal',
  slidesPerView: 9,
  loopedSlides: 1,
  spaceBetween: 30,
  speed: 800,
  loop: true,
  breakpoints: {
    1281: {
      slidesPerView: 7,
    },
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    480: {
      slidesPerView: 3,
    },
  }
});