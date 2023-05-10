let scrollNum = 0;
let documentHeight = 0;
let windowHeight = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    item.style.transform = `translateY(${
      -scrollNum / (2 * (totalNum - index))
    }px)`;
  });
});
