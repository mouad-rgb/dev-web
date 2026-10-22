const titre = document.getElementById("titre");
const menu = document.querySelector(".menu");

titre.addEventListener("click", () => {
  menu.classList.toggle("ouvert");
});
