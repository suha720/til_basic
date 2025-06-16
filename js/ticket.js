window.addEventListener("load", () => {
  // 데이터
  const ticketApiData = [
    {
      링크: "#",
      이미지: "//ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
      타이틀: "뮤지컬 <맘마미아!>",
      장소: "LG아트센터 서울 LG SIGNATURE 홀",
      공연기간: "2025.07.26 - 2025.10.25",
      옵레: "단독판매",
      옵블: "좌석우위",
    },

    {
      링크: "#",
      이미지: "//ticketimage.interpark.com/Play/image/large/25/25006845_p.gif",
      타이틀: "뮤지컬 〈등등곡〉",
      장소: "예스24스테이지 1관",
      공연기간: "2025.06.24 - 2025.09.14",
      옵레: "",
      옵블: "",
    },

    {
      링크: "#",
      이미지: "//ticketimage.interpark.com/Play/image/large/25/25004150_p.gif",
      타이틀: "뮤지컬 〈사랑은 비를 타고 〉 30주년 공연",
      장소: "백암아트홀",
      공연기간: "2025.04.29 - 2025.07.13",
      옵레: "",
      옵블: "좌석우위",
    },

    {
      링크: "#",
      이미지: "//ticketimage.interpark.com/Play/image/large/25/25007077_p.gif",
      타이틀: "뮤지컬 〈플레임즈〉",
      장소: "SH아트홀",
      공연기간: "2025.06.26 - 2025.09.14",
      옵레: "단독판매",
      옵블: "",
    },
  ];

  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  let html = `
  <div class="swiper-slide">
    <a href="#" class="ticket_slide_item">
      <div class="ticket_image">
        <img
          src="//ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif"
          alt="포스트"
        />
        <div class="ticket_rank">1</div>
      </div>
      <div class="ticket_info">
        <p class="ticket_item_title">뮤지컬 <맘마미아!></p>
        <p class="ticket_place">
          LG아트센터 서울 LG SIGNATURE 홀
        </p>
        <p class="ticket_day">2025.07.26 ~ 2025.10.25</p>
        <div class="ticket_option">
          <span class="ticket_red">단독판매</span>
          <span class="ticket_blue">좌석우위</span>
        </div>
      </div>
    </a>
  </div>
  `;

  // 실제 데이터 개수 만큼 swiper-slide 태그 만들어 배치하기
  html = "";
  for (let i = 0; i < 8; i++) {
    let tag = `
  <div class="swiper-slide">
    <a href="${ticketApiData[0].링크}" class="ticket_slide_item">
      <div class="ticket_image">
        <img
          src="${ticketApiData[0].이미지}"
          alt="포스트"
        />
        <div class="ticket_rank">1</div>
      </div>
      <div class="ticket_info">
        <p class="ticket_item_title">${ticketApiData[0].타이틀}</p>
        <p class="ticket_place">
          ${ticketApiData[1].장소}
        </p>
        <p class="ticket_day">${ticketApiData[0].공연기간}</p>
        <div class="ticket_option">
          <span class="ticket_red">${ticketApiData[0].옵레}</span>
          <span class="ticket_blue">${ticketApiData[0].옵블}</span>
        </div>
      </div>
    </a>
  </div>
    `;

    html = html + tag;
  }

  ticketPos.innerHTML = html;

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
