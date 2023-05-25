const header = document.querySelector("header");
const bar = document.querySelector(".bar");
const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");
const dimd = coverWrap.querySelector(".dimd");

let windowScroll = 0;
let scrollNum = 0;
let totalHeight = 0;
let dimdHeight = 0;

window.addEventListener("scroll", () => {
  dimdHeight = dimd.scrollHeight;
  windowScroll = window.scrollY;
  scrollNum = windowScroll - dimdHeight;
  totalHeight = document.body.scrollHeight - dimdHeight;

  console.log("height", window.innerHeight);
  console.log(percent(scrollNum, totalHeight));

  if (windowScroll >= dimdHeight) {
    header.classList.add("fixed");
    header.style.top = windowScroll + "px";
    bar.style.width = percent(scrollNum, totalHeight) + "%";
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = -windowScroll / 10 + "px";
    coverWrap.style.backgroundPosition = `center ${-windowScroll / 5}px`;
    dimd.style.backgroundColor = `rgba(0,0,0, ${0.4 + windowScroll / 1000})`;
  }
});

const percent = (scrollNum, totalHeight) => {
  return ((scrollNum / totalHeight) * 100).toFixed(0);
};
