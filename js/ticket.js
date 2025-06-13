window.addEventListener("load", () => {
  const ticbts = document.querySelectorAll(".ticket_nav li button");
  console.log(ticbts);
  ticbts.forEach(function (item) {
    item.addEventListener("click", function () {
      removeFocus();
    //   console.log(ticbts);
      // 클릭된 버튼은 tour_focus 클래스 추가
      item.classList.add("ticket_focus");
    });
  });

  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    ticbts.forEach(function (item) {
      item.classList.remove("ticket_focus");
    });
  }

  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
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
