window.addEventListener("DOMContentLoaded", () => {
  // 버튼 클릭시 내용 보이고, 숨기기 토글
  let isOpen = false;
  // 아이디 요소를 보관
  const mb_bt: Element | null = document.querySelector("#mb_bt");
  // 보이고 숨겨지는 대상
  const hideTarget: NodeListOf<Element> =
    document.querySelectorAll(".mb_footer_hide");
  // 아이콘 이미지
  const arrowImg: Element | null = document.querySelector("#mb_bt i img");
  // console.log(`이미지 버튼 확인용 ${arrowImg}`);

  // 버튼 클릭 확인 코드
  mb_bt!.addEventListener("click", () => {
    isOpen = !isOpen;
    // isOpen 전역이였지
    showHideMenu();
  });

  window.addEventListener("resize", () => {
    // 웹 브라우저 너비가 1024 보다 큰지 작은지
    const winW = window.outerWidth;

    if (winW >= 1024) {
      isOpen = false;
      // isOpen 전역 이였지
      showHideMenu();
    }
  });

  // 모바일 메뉴 관련 함수
  function showHideMenu() {
    if (isOpen) {
      // 펼치기
      // console.log(isOpen);
      arrowImg!.classList.add("img-up");
      for (let item of hideTarget) {
        item.classList.add("mb_footer_show");
      }
    } else {
      // 닫기
      arrowImg!.classList.remove("img-up");
      for (let item of hideTarget) {
        item.classList.remove("mb_footer_show");
      }
    }
  }
});
