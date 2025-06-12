window.addEventListener("load", () => {
  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 8,
    spaceBetween: 10,
    slidesPerGroup: 1,
    
    // 브레이크 위로
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },

    // 반응형
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
