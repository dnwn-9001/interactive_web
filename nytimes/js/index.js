const contentAll = document.querySelectorAll(".content__wrap img");

const redTree = contentAll[0];
const blueTree = contentAll[1];
const blueberry = contentAll[2];
const raspberry = contentAll[3];
const blueberry2 = contentAll[4];
const raspberry2 = contentAll[5];
const raspberry3 = contentAll[6];
const bird = document.querySelector(".bird__video");

let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  y = e.pageY - window.innerHeight / 2;
});

const mouseMoveFunc = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  blueTree.style.transform = `translate(${-targetX / 80}px, ${
    -targetY / 80
  }px)`;
  bird.style.transform = `translate(${-targetX / 60}px, ${-targetY / 60}px)`;

  blueberry.style.transform = `translate(${-targetX / 40}px, ${
    -targetY / 40
  }px)`;
  raspberry.style.transform = `translate(${-targetX / 40}px, ${
    -targetY / 40
  }px)`;
  blueberry2.style.transform = `translate(${-targetX / 40}px, ${
    -targetY / 40
  }px)`;
  raspberry2.style.transform = `translate(${-targetX / 40}px, ${
    -targetY / 40
  }px)`;
  raspberry3.style.transform = `translate(${-targetX / 40}px, ${
    -targetY / 40
  }px)`;

  window.requestAnimationFrame(mouseMoveFunc);
};

mouseMoveFunc();
