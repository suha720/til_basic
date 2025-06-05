console.log(`header.js 코드를 실행합니다.`);

// html 의 태그구조를 모두 읽어들였다면 그때 찾아라.
//
window.addEventListener("DOMContentLoaded", () => {
  // 상단 영역
  const headerTop = document.querySelector(`.header_top`);
  // 로고
  const logo = document.querySelector(`.logo`);
  // 제품검색
  const search = document.querySelector(`.search`);
  // 세일 제품배너
  const sale = document.querySelector(`.sale`);
  // 링크 사이트 목록
  const linkSite = document.querySelector(`.link_site`);
  // 메인메뉴  a 태그들: 여러 개
  const mainMenuA = document.querySelectorAll(`.main_menu li a`);
  // 멤버메뉴 a 태그들: 여러 개
  const memberMenuA = document.querySelectorAll(`.member_menu li a`);

  console.log(mainMenuA);
  console.log(`메인메뉴 a 태그의 개수는 ${mainMenuA.length} 입니다.`);

  console.log(memberMenuA);

  // 웹 브라우저의 스크롤을 체크하겠다.
  window.addEventListener(`scroll`, () => {
    const scY = window.scrollY;
    if (scY > 0) {
      console.log(`스크롤 되었다.`);
      headerTop.classList.add(`header_top_scroll`);
      logo.classList.add(`logo_hide`);
      sale.classList.add(`sale_hide`);
      search.classList.add(`search_scroll`);
      linkSite.classList.add(`link_site_hide`);

      // 메인메뉴 class 추가
      mainMenuA.forEach((item) => {
        item.classList.add(`height_62`);
      });
      // 회원메뉴 class 추가
      memberMenuA.forEach((item) => {
        item.classList.add(`height_62`);
      });
    } else {
      console.log(`스크롤 최상단`);
      headerTop.classList.remove(`header_top_scroll`);
      logo.classList.remove(`logo_hide`);
      sale.classList.remove(`sale_hide`);
      search.classList.remove(`search_scroll`);
      linkSite.classList.remove(`link_site_hide`);

      mainMenuA.forEach((item) => {
        item.classList.remove(`height_62`);
      });
      // 회원메뉴 class 추가
      memberMenuA.forEach((item) => {
        item.classList.remove(`height_62`);
      });
    }
  });
});

// const 상수
// let 은 변수, var 를 이긴 신세대?
// var 자료형이 없다? 데이터 타입이 가변적이야
// 변수명 : 명사, const 는 대문자로 해야하는게 아닐까
