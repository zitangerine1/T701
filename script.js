function poof() {
  document.querySelector(".tempBG").style.opacity = 0;
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".stop").style.opacity = 0;
};

const popup = document.querySelector(".popup")
const bg = document.querySelector(".tempBG")
const stop = document.querySelector(".stop")

document.querySelector("#close").onclick = function () {
  popup.classList.toggle('fade');
  bg.classList.toggle('fade');
  stop.classList.toggle('fade');
}
