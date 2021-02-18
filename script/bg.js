const bgImgs = [
  "https://images3.alphacoders.com/106/thumb-1920-1069102.jpg",
  "https://images6.alphacoders.com/101/thumb-1920-1014033.jpg",
  "https://i.redd.it/ub4dywjkj9k51.jpg",
];

const containerBg = document.querySelector("body");

function init() {
  const randomNumber = Math.floor(Math.random() * bgImgs.length);
  const bg = new Image();
  bg.src = bgImgs[randomNumber];
  bg.classList.add("bg");
  containerBg.appendChild(bg);
}
init();
