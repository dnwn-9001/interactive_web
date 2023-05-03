const dimd = document.querySelector(".dimd");
const header = document.querySelector("header");
const progressWrap = document.querySelector(".progressWrap");
const bar = document.querySelector(".bar");
const headerWrap = document.querySelector(".headerWrap");
const blog = document.querySelector(".headerWrap h1");

let scrollNum = 0;
let totalHeight = 0;
const dimdHeight = dimd.scrollHeight;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY - dimdHeight;
  totalHeight = document.body.scrollHeight - dimdHeight;

  if (window.scrollY >= dimdHeight) {
    header.style.top = window.scrollY + "px";
    blog.style.color = "black";
    progressWrap.style.display = "block";
    headerWrap.style.backgroundColor = "rgba(250,250,250, 0.6)";
    bar.style.width = percent(scrollNum, totalHeight) + "%";
  } else {
    header.style.top = "0";
    blog.style.color = "white";
    progressWrap.style.display = "none";
    headerWrap.style.backgroundColor = "transparent";
  }
});

const percent = (scrollNum, totalHeight) => {
  return ((scrollNum / totalHeight) * 100).toFixed(0);
};
