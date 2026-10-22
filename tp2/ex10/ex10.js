const modal = document.getElementById("modal");
const ouvrir = document.getElementById("ouvrir");
const fermer = document.getElementById("fermer");

// Ouvrir : on ajoute la classe qui rend l'overlay visible
ouvrir.addEventListener("click", () => {
  modal.classList.add("visible");
});

// Fermer : on retire cette classe
fermer.addEventListener("click", () => {
  modal.classList.remove("visible");
});
