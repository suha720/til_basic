window.addEventListener("load", () => {
  // 1. 벡엔드 데이터 가져오기
  async function getData() {
    try {
      const res = await fetch("/apis/trip.json");
      const result = await res.json();
      // console.log(result);
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }
  // 2. html 생성
  function makeHtml(data) {
    let html = "";
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];

      let tag = `
  <div class="swiper-slide">
    <a href="${data[i].링크}" class="trip_slide_item">
      <div class="trip_image">
        <img
          src="${data[i].이미지}"
          alt="${data[i].alt}"
        />
      </div>
      <div class="trip_info">
        <div class="trip_icon">
          <img src="images/icon_w_logo_new.svg" alt="trip" />
          ${data[i].대상}
        </div>
        <p class="trip_item_title">
          ${data[i].상품타이틀}
        </p>
        <p class="trip_schedule">
        `;

      for (let j = 0; j < data[i].스케쥴.length; j++) {
        tag += `<span>${data[i].스케쥴[j]}</span>`;
      }

      tag += `</p>

        <p class="trip_price">
          <b>${data[i].상품가격}</b>
          원~
          <span class="m_line">${data[i].정상가}</span>
        </p>
      </div>
    </a>
  </div>
    `;

      html += tag;
    }

    const where = document.querySelector(".sw_trip .swiper-wrapper");
    where.innerHTML = html;

    makeSlide();
  }

  // 3. Swiper 만들기
  function makeSlide() {
    new Swiper(".sw_trip", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 2,
      navigation: {
        nextEl: ".trip_slide_next",
        prevEl: ".trip_slide_prev",
      },
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
  }

  getData();
});
