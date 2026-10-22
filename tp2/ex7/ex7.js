let elapsed = 0;
let start = 0;
let timer = null;
document.addEventListener("DOMContentLoaded", () => {
  start = Date.now() - elapsed;
  timer = setInterval(update, 1000);
});
function update() {
  const currentTime = Date.now();
  elapsed = currentTime - start;

  let secondes = Math.floor((elapsed / 1000) % 60);
  document.getElementById("chrono").textContent =
    `temps ecoule ${secondes} secounds`;
}
