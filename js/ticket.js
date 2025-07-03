// useEffect : JSX 완성되면 <= 리액트에서 DONContentloaded
window.addEventListener("load", () => {
  // 1. 백엔드 데이터 가져오기 : 1 번만 실행
  let originData;

  async function getData() {
    try {
      const res = await fetch("/apis/ticket.json");
      const result = await res.json();
      // 전역에서 사용하도록 보관함
      originData = result;
      makeCategoryHtml();
      makeSlideHtml();
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 생성
  // 2.1 카테고리 버튼 생성
  function makeCategoryHtml() {
    let cateHtml = "";
    for (let i = 0; i < originData.length; i++) {
      // const obj = data[i];
      const { 카테고리 } = originData[i];
      const tag = `<li class="ticket_nav_item"><button class="ticket_header_btn">${카테고리}</button></li>`;
      cateHtml += tag;
    }

    const where = document.querySelector(".ticket_nav");
    // console.log(cateHtml);
    where.innerHTML = cateHtml;

    makeBtnInit();

    // data.forEach((item, index) => {})
  }
  // 2.2 슬라이드 html 태그 생성
  let showIndex = 0;
  function makeSlideHtml() {
    let html = "";

    const showData = originData[showIndex].데이터;
    for (let i = 0; i < showData.length; i++) {
      const obj = showData[i];

      // 임시 태그
      let tag = `
    <div class="swiper-slide">
      <a href="${obj.링크}" class="ticket_slide_item">
        <div class="ticket_image">
          <img
            src="${obj.이미지}"
            alt="${obj.alt}"
          />
          <div class="ticket_rank">${obj.랭크}</div>
        </div>

        <div class="ticket_info">
          <p class="ticket_item_title">
            ${obj.타이틀}
          </p>
          <p class="ticket_place">
            ${obj.장소}
          </p>
          <p class="ticket_day">${obj.날짜}</p>
          <div class="ticket_option">`;

      // console.log(obj.옵션.length);
      for (let j = 0; j < obj.옵션.length; j++) {
        tag =
          tag +
          `<span class="ticket_${obj.옵션[j].스타일}">${obj.옵션[j].텍스트}</span>`;
      }

      tag =
        tag +
        `</div>
        </div>
      </a>
    </div> 
    `;

      html += tag;
      // console.log(html);
    }
    const where = document.querySelector(".sw_ticket .swiper-wrapper");
    where.innerHTML = html;

    makeSlide();
  }
  // 3. Swiper 를 만들기
  let swiperTicket;

  function makeSlide() {
    if (swiperTicket) {
      swiperTicket.destroy();
    }

    // swiper 만들기 실행
    swiperTicket = new Swiper(".sw_ticket", {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
      navigation: {
        nextEl: ".ticket_slide_next",
        prevEl: ".ticket_slide_prev",
      },
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

  // 4. 카테고리 버튼 선택시 다시 슬라이드 html 태그 생성
  //        2.2 과정, 3 과정을 다시 진행

  // 5. 버튼 포커스 기능
  // 기능은 1 번만 등록하기
  function makeBtnInit() {
    const btList = document.querySelectorAll(".ticket_header_btn");
    btList[showIndex].classList.add("ticket_focus");
    btList.forEach((item, index) => {
      item.addEventListener("click", () => {
        resetFocus();
        showIndex = index;
        item.classList.add("ticket_focus");
        makeSlideHtml();
      });
    });
  }
  // 6. 포커스 해제 기능
  function resetFocus() {
    const btList = document.querySelectorAll(".ticket_header_btn");
    btList.forEach((item, index) => {
      item.classList.remove("ticket_focus");
    });
  }

  getData();
});
