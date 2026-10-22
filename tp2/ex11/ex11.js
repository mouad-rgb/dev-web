const produits = [
  "Ordinateur portable",
  "Souris sans fil",
  "Clavier mécanique",
  "Écran 27 pouces",
  "Casque audio",
  "Webcam HD",
  "Imprimante",
  "Disque dur externe",
];

const recherche = document.getElementById("recherche");
const liste = document.getElementById("liste");
const vide = document.getElementById("vide");

function afficher(tableau) {
  liste.innerHTML = "";
  tableau.forEach((produit) => {
    const li = document.createElement("li");
    li.textContent = produit;
    liste.append(li);
  });
  vide.style.display = tableau.length === 0 ? "block" : "none";
}
recherche.addEventListener("input", () => {
  const texte = recherche.value.trim().toLowerCase();

  const resultat = produits.filter((produit) =>
    produit.toLowerCase().includes(texte),
  );

  afficher(resultat);
});
afficher(produits);
