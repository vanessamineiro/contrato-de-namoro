// Faz o botão "não" fugir do mouse
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  const container = document.querySelector(".container");
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
});

// Quando clica em "Sim"
document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("response").classList.remove("hidden");
});
