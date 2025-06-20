window.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".popup_close");
  const popup = document.querySelector(".popup");

  closeBtn.addEventListener("click", () => {
    // popup.classList.add("popup_hide");
    // 바로 스타일 넣기
    popup.style.display = "none";
  });
});
