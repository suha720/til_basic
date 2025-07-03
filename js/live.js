window.addEventListener("load", () => {
  // 1. 데이터 가져오기
  async function getData() {
    try {
      const res = await fetch("/apis/live.json");
      const result = await res.json();
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 태그 만들기
  function makeHtml(data) {
    let html = "";

    // html 태그 만들기
    // 버전 1. 그냥 for문 쓰기, for문 안의 주석 처리된 tag 해제하면 실행됨
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];

      //   let tag = `
      //         <div class="swiper-slide">
      //       <a href="#" class="live_slide_item">
      //         <div class="live_image">
      //           <img
      //             src="${obj.이미지주소}"
      //             alt="라이브"
      //           />
      //         </div>
      //         <div class="live_info">
      //           <div class="live_state">
      //             <span class="live_wait">${obj.wait}</span>
      //           </div>
      //           <p class="live_item_title">
      //             ${obj.제목}
      //           </p>
      //           <div class="live_day">
      //             <div class="live_day_date">${obj.date}</div>
      //             <div class="live_day_time">${obj.time}</div>
      //           </div>
      //           <div class="live_detail">
      //             <div class="live_detail_image">
      //               <img
      //                 src="${obj.detail_img}"
      //                 alt="상세정보"
      //               />
      //             </div>
      //             <p class="live_detail_title">
      //               ${obj.detail_title}
      //             </p>
      //           </div>
      //         </div>
      //       </a>
      //     </div>

      // `;

      // html += tag;
    }
    // 버전 1. 끝


    // 버전 2. forEach 사용하기, 현재 적용중임
    data.forEach((obj, index) => {
      let tag = `
                  <div class="swiper-slide">
          <a href="#" class="live_slide_item">
            <div class="live_image">
              <img
                src="${obj.이미지주소}"
                alt="라이브"
              />
            </div>
            <div class="live_info">
              <div class="live_state">
                <span class="live_wait">${obj.wait}</span>
              </div>
              <p class="live_item_title">
                ${obj.제목}
              </p>
              <div class="live_day">
                <div class="live_day_date">${obj.date}</div>
                <div class="live_day_time">${obj.time}</div>
              </div>
              <div class="live_detail">
                <div class="live_detail_image">
                  <img
                    src="${obj.detail_img}"
                    alt="상세정보"
                  />
                </div>
                <p class="live_detail_title">
                  ${obj.detail_title}
                </p>
              </div>
            </div>
          </a>
        </div>

`;
      html += tag;
    });
    // 버전 2. 끝

    const where = document.querySelector(".sw_live .swiper-wrapper");
    where.innerHTML = html;

    makeSlide();
  }

  // 3. 슬라이드 만들기
  function makeSlide() {
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
  }

  // 최종 함수 실행하기
  getData();
});
