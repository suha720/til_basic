// Cannot find name 'Swiper'. Did you mean 'swiperS'?ts(2552)
// trip.ts(205, 9): 'swiperS' is declared here.
declare let Swiper: any;

window.addEventListener("load", () => {
  type tripDataType = {
    링크: string;
    이미지: string;
    alt: string;
    대상: string;
    상품타이틀: string;
    스케쥴: string[];
    상품가격: string;
    정상가: string;
  };
  // 데이터
  const tripApiData: tripDataType[] = [
    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/B40/500/B4010646_6_423.JPG",
      alt: "여행상품",
      대상: "가족",
      상품타이틀:
        "[베스트셀러] 괌 PIC 골드카드+전일자유일정 오전출발4일_제주항공에서 추천하는 좋은 여행입니다.",
      스케쥴: ["3박 4일", "인천 출발", "제주 항공", "노쇼핑"],
      상품가격: "1,550,6000",
      정상가: "정상가 1,800,000",
    },

    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/A60/500/A6020752_1_257.jpg",
      alt: "여행상품",
      대상: "아이",
      상품타이틀:
        "[영어캠프홀릭]일본 오키나와 1주 영어캠프, 25년 여름방학 맞이 오키나와 놀이형 영어캠프",
      스케쥴: ["3박 5일", "인천 출발", "제주 항공", "쇼핑2회"],
      상품가격: "626,050",
      정상가: "정상가 659,000",
    },
    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/A10/500/A1037435_14_780.jpg",
      alt: "여행상품",
      대상: "친구연인",
      상품타이틀:
        "[베스트셀러/W트립] 서유럽4국10일, 영국/프랑스/스위스/이탈리아, 대한항공+월드체인호텔",
      스케쥴: ["8박 10일", "인천 출발", "대한항공", "쇼핑6회"],
      상품가격: "4,179,000",
      정상가: "정상가 4,299,000",
    },

    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/A10/500/A1033180_4_453.jpg",
      alt: "여행상품",
      대상: "친구연인",
      상품타이틀:
        "[베스트셀러/W트립]보홀 5일, 리조트선택가능, 나팔링투어+반딧불+선셋투어+SNS맛집 포함",
      스케쥴: ["3박 5일", "인천 출발", "제주 항공", "쇼핑2회"],
      상품가격: "626,050",
      정상가: "정상가 659,000",
    },

    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/A10/500/A1033632_4_373.jpg",
      alt: "여행상품",
      대상: "친구연인",
      상품타이틀:
        "[베스트셀러/W트립] 튀르키예 9일, 아시아나직항, 월드체인3박UP, 3대옵션포함",
      스케쥴: ["7박 9일", "인천 출발", "아시아나항공", "쇼핑6회"],
      상품가격: "1,139,050",
      정상가: "정상가 1,199,000",
    },

    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/A30/500/A3018701_1_393.jpg",
      alt: "여행상품",
      대상: "가족",
      상품타이틀:
        "[베스트셀러/W트립] 싱가포르 5일, 마리나베이샌즈 1박, 노쇼핑, 4인이상 출발보장",
      스케쥴: ["3박 5일", "인천 출발", "제주 항공", "노쇼핑"],
      상품가격: "1,310,050",
      정상가: "정상가 1,379,000",
    },

    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/A10/500/A1034124_4_510.jpg",
      alt: "여행상품",
      대상: "가족",
      상품타이틀:
        "[베스트셀러/W트립] 4성급 밍가든VS판보르네오 호핑+자유일정 포함 코타키나발루 5일",
      스케쥴: ["3박 5일", "인천 출발", "제주 항공", "쇼핑3회"],
      상품가격: "239,000",
      정상가: "",
    },
    {
      링크: "#",
      이미지:
        "https://media.interparkcdn.net/interpark-tour/f_auto/w_375,h_270,q_auto,c_auto/tourimage/product/tour/00161/A30/500/A3018715_8_223.jpg",
      alt: "여행상품",
      대상: "아이",
      상품타이틀:
        "[영어캠프홀릭] 사이판 2주, 명문 국제 사립학교 커리큘럼 스쿨링 영어캠프",
      스케쥴: ["13박 14일", "인천 출발", "노쇼핑"],
      상품가격: "2,600,000",
      정상가: "",
    },
  ];

  // html 태그 만들고 배치하기
  const tripPos: Element | null = document.querySelector(
    ".sw_trip .swiper-wrapper"
  );
  let html = `
  <div class="swiper-slide">
    <a href="${tripApiData[0].링크}" class="trip_slide_item">
      <div class="trip_image">
        <img
          src="${tripApiData[0].이미지}"
          alt="${tripApiData[0].alt}"
        />
      </div>
      <div class="trip_info">
        <div class="trip_icon">
          <img src="images/icon_w_logo_new.svg" alt="trip" />
          ${tripApiData[0].대상}
        </div>
        <p class="trip_item_title">
          ${tripApiData[0].상품타이틀}
        </p>

        
        <p class="trip_schedule">
          <span>${tripApiData[0].스케쥴[0]}</span>
          <span>${tripApiData[0].스케쥴[1]}</span>
          <span>${tripApiData[0].스케쥴[2]}</span>
          <span>${tripApiData[0].스케쥴[3]}</span>
        </p>
        <p class="trip_price">
          <b>${tripApiData[0].상품가격}</b>
          원~
          <span class="m_line">${tripApiData[0].정상가}</span>
        </p>
      </div>
    </a>
  </div>
  `;

  // 실제 데이터 개수 만큼 swiper-slide 태그 만들어 배치하기
  html = "";

  function makeHtml() {
    for (let i = 0; i < tripApiData.length; i++) {
      let tag = `
  <div class="swiper-slide">
    <a href="${tripApiData[i].링크}" class="trip_slide_item">
      <div class="trip_image">
        <img
          src="${tripApiData[i].이미지}"
          alt="${tripApiData[i].alt}"
        />
      </div>
      <div class="trip_info">
        <div class="trip_icon">
          <img src="images/icon_w_logo_new.svg" alt="trip" />
          ${tripApiData[i].대상}
        </div>
        <p class="trip_item_title">
          ${tripApiData[i].상품타이틀}
        </p>
        <p class="trip_schedule">
        `;

      for (let j = 0; j < tripApiData[i].스케쥴.length; j++) {
        tag += `<span>${tripApiData[i].스케쥴[j]}</span>`;
      }

      tag += `</p>

        <p class="trip_price">
          <b>${tripApiData[i].상품가격}</b>
          원~
          <span class="m_line">${tripApiData[i].정상가}</span>
        </p>
      </div>
    </a>
  </div>
    `;

      html = html + tag;
    }

    // console.log("만들어진 태그 : ", html);

    tripPos!.innerHTML = html;
  }

  // swiper 만들기 실행
  function makeSlide() {
    new Swiper(".sw_trip", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,
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

  makeHtml();
  makeSlide();
});
