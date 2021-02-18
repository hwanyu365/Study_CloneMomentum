const containerClock = document.querySelector(".js-clock");
const txtClockTitle = containerClock.querySelector("span");

function init() {
  updateTime();
  setInterval(updateTime, 1000);
}
init();

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  txtClockTitle.textContent = `${hours < 10 ? `0${hours}` : hours}
   : ${minutes < 10 ? `0${minutes}` : minutes}
   : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
