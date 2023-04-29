const depthWrap = document.querySelector(".depthWrap");
const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

let scrollNum = 0;
let totalHeight = 0;
let percentNum = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  totalHeight = document.body.scrollHeight - window.innerHeight;
  percentNum = percent(scrollNum, totalHeight);
  depthWrap.querySelector("span").innerText = percentNum * 10;
  progressBar.style.width = percentNum + "%";
  submarine.style.left = percentNum / 10 + "%";
  //   submarine.style.transform = `translateX(${percentNum}%)`;
  octopus.style.transform = `translateY(${-percentNum / 3}%)`;
});

const percent = (scrollNum, totalHeight) => {
  return ((scrollNum / totalHeight) * 100).toFixed(0);
};
