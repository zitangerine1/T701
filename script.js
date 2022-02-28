const popup = document.querySelector(".popup")
const bg = document.querySelector(".tempBG")
const stop = document.querySelector(".stop")

function poof() {
  bg.style.opacity = 0;
  popup.style.opacity = 0;
  stop.style.opacity = 0;
};

function poof2() {
  bg.style.zIndex = 1;
}

document.querySelector("#close").onclick = function () {
  popup.classList.toggle('fade');
  bg.classList.toggle('fade');
  stop.classList.toggle('fade');
}
