window.addEventListener("load", () => {
  const liveApiData = [
    {
      uid: 1,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612011101.jpg",
      wait: "라이브 다시보기",
      제목: "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      date: "06월 17일 (화)",
      time: "19:00 ",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      detail_title: "[상품보기] 푸꾸옥 자유여행 혜택 보러가기",
    },

    {
      uid: 2,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      wait: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      date: "06월 18일 (수)",
      time: "11:00 ",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detail_title: "월요라이브 자세히보기!",
    },

    {
      uid: 3,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250410/14/96/20250410063525.png",
      wait: "라이브 다시보기",
      제목: "[진에어] 선착순 쿠폰! 전 노선 위탁수하물 15KG 포함 라이브 특가💚",
      date: "",
      time: "",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/152/20250610092726.png",
      detail_title: "[쿠폰 기획전] 진에어 라이브 특가",
    },
    {
      uid: 4,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250409/14/159/20250409080454.jpg",
      wait: "라이브 다시보기",
      제목: "[이스타항공] 부산 ↔ 푸꾸옥 국적사 단독 신규취항! 27개 노선, 왕복 8만원대부터 🎈",
      date: "",
      time: "",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250325/14/152/20250325045420.png",
      detail_title: "[쿠폰/전노선] 이스타항공 기획전",
    },
    {
      uid: 1,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612011101.jpg",
      wait: "라이브 다시보기",
      제목: "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      date: "06월 17일 (화)",
      time: "19:00 ",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      detail_title: "[상품보기] 푸꾸옥 자유여행 혜택 보러가기",
    },

    {
      uid: 2,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      wait: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      date: "06월 18일 (수)",
      time: "11:00 ",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detail_title: "월요라이브 자세히보기!",
    },

    {
      uid: 3,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250410/14/96/20250410063525.png",
      wait: "라이브 다시보기",
      제목: "[진에어] 선착순 쿠폰! 전 노선 위탁수하물 15KG 포함 라이브 특가💚",
      date: "",
      time: "",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/152/20250610092726.png",
      detail_title: "[쿠폰 기획전] 진에어 라이브 특가",
    },
    {
      uid: 4,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250409/14/159/20250409080454.jpg",
      wait: "라이브 다시보기",
      제목: "[이스타항공] 부산 ↔ 푸꾸옥 국적사 단독 신규취항! 27개 노선, 왕복 8만원대부터 🎈",
      date: "",
      time: "",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250325/14/152/20250325045420.png",
      detail_title: "[쿠폰/전노선] 이스타항공 기획전",
    },
    {
      uid: 1,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612011101.jpg",
      wait: "라이브 다시보기",
      제목: "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      date: "06월 17일 (화)",
      time: "19:00 ",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      detail_title: "[상품보기] 푸꾸옥 자유여행 혜택 보러가기",
    },

    {
      uid: 2,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      wait: "라이브 다시보기",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      date: "06월 18일 (수)",
      time: "11:00 ",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      detail_title: "월요라이브 자세히보기!",
    },

    {
      uid: 3,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250410/14/96/20250410063525.png",
      wait: "라이브 다시보기",
      제목: "[진에어] 선착순 쿠폰! 전 노선 위탁수하물 15KG 포함 라이브 특가💚",
      date: "",
      time: "",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/152/20250610092726.png",
      detail_title: "[쿠폰 기획전] 진에어 라이브 특가",
    },
    {
      uid: 4,
      링크: "#",
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250409/14/159/20250409080454.jpg",
      wait: "라이브 다시보기",
      제목: "[이스타항공] 부산 ↔ 푸꾸옥 국적사 단독 신규취항! 27개 노선, 왕복 8만원대부터 🎈",
      date: "",
      time: "",
      detail_img:
        "https://common-live-vod.interparkcdn.net/data/image/20250325/14/152/20250325045420.png",
      detail_title: "[쿠폰/전노선] 이스타항공 기획전",
    },

    
  ];

  // 슬라이드 연동
  const testPos = document.querySelector(".sw_live .swiper-wrapper");

  let html = ``;

  for (let i = 0; i < liveApiData.length; i++) {
    let tag = `
            <div class="swiper-slide">
          <a href="#" class="live_slide_item">
            <div class="live_image">
              <img
                src="${liveApiData[i].이미지주소}"
                alt="라이브"
              />
            </div>
            <div class="live_info">
              <div class="live_state">
                <span class="live_wait">${liveApiData[i].wait}</span>
              </div>
              <p class="live_item_title">
                ${liveApiData[i].제목}
              </p>
              <div class="live_day">
                <div class="live_day_date">${liveApiData[i].date}</div>
                <div class="live_day_time">${liveApiData[i].time}</div>
              </div>
              <div class="live_detail">
                <div class="live_detail_image">
                  <img
                    src="${liveApiData[i].detail_img}"
                    alt="상세정보"
                  />
                </div>
                <p class="live_detail_title">
                  ${liveApiData[i].detail_title}
                </p>
              </div>
            </div>
          </a>
        </div>

    `;

    html += tag
  }
  testPos.innerHTML = html;

  // console.log(testPos);

  // livePos.innerHTML = html;

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
