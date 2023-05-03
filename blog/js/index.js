// 스크롤시 헤더를 넘어가면 블로그 헤더 바탕색이 하얀색으로
// + 프로그레스바 생겨서 진행현황 보여줌.
const dimd = document.querySelector(".dimd");
const header = document.querySelector("header");
const progressBar = document.querySelector(".progressWrap");
const headerWrap = document.querySelector(".headerWrap");
const blog = document.querySelector(".headerWrap h1");

window.addEventListener("scroll", () => {
  if (window.scrollY >= dimd.scrollHeight) {
    header.style.top = window.scrollY + "px";
    blog.style.color = "black";
    progressBar.style.display = "block";
    headerWrap.style.backgroundColor = "rgba(250,250,250, 0.5)";
  } else {
    header.style.top = "0";
    blog.style.color = "white";
    progressBar.style.display = "none";
    headerWrap.style.backgroundColor = "transparent";
  }
});
