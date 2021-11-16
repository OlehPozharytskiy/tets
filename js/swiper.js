const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 50,
  loop: true,
  simulateTouch: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: "#swiperNext",
    prevEl: "#swiperPrev",
  },
});
