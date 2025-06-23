window.addEventListener("DOMContentLoaded", () => {
  const closeBtn: Element | null = document.querySelector(".popup_close");
  const popup: HTMLDivElement | null = document.querySelector(".popup");

  closeBtn!.addEventListener("click", () => {
    // popup.classList.add("popup_hide");
    // 바로 스타일 넣기
    popup!.style.display = "none";
  });
});

// `!.` <= null 이든 undefined 든 날 믿고 진행시켜