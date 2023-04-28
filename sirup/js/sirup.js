let x = 0;
let targetX = 0;
const speed = 0.08;

const contentAll = document.querySelectorAll(".contWrap img");
const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${targetX / 35}px)`; //rotate로 하면 회전 느낌, 이미지뿐 아니라 영상도 돌릴수있음.
  date.style.transform = `translateX(${-targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 30}px)`;
  textImg.style.transform = `translateX(${-targetX / 40}px)`;
  window.requestAnimationFrame(loop);
};

loop();
