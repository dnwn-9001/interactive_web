const imageAll = document.querySelectorAll(".parallaxImage");

let scrollNum = 0;
let totalHeight = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  imageAll.forEach((item, index) => {
    item.style.transform = `scale(1.1)`;
  });
});
