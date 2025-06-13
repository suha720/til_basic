window.addEventListener("load", () => {
  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    
    // 브레이크 위로
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },

    // 반응형
    breakpoints: {
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
