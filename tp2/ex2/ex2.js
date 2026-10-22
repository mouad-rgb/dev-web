const btn = document.getElementById("af");
const btn1 = document.getElementById("mas");

btn.addEventListener("click", () => {
  document.getElementById("afficher").innerText =
    "ce text peut s'afficher ou se masquer";
});
btn1.addEventListener("click", () => {
  document.getElementById("afficher").innerText = "";
});
